import type { Request, Response } from "express";
import type { Prisma } from "@prisma/client";
import prisma from "../config/prisma.js";

// Cadastrar livro
export async function cadastrarLivro(req: Request, res: Response) {
  try {
    const { titulo, autor, editora, genero, preco, quantidade } = req.body ?? {};

    if (
      !titulo || !autor || !editora || !genero ||
      !Number.isFinite(Number(preco)) || Number(preco) <= 0 ||
      !Number.isInteger(Number(quantidade)) || Number(quantidade) < 0
    ) {
      return res.status(400).json({
        erro: "Preencha os dados do livro corretamente."
      });
    }

    const livro = await prisma.livro.create({
      data: {
        titulo,
        autor,
        editora,
        genero,
        preco: Number(preco),
        quantidade: Number(quantidade)
      }
    });

    return res.status(201).json(livro);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao cadastrar livro." });
  }
}

// Listar livros
export async function listarLivros(req: Request, res: Response) {
  try {
    const livros = await prisma.livro.findMany();
    return res.json(livros);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao listar livros." });
  }
}

// Editar livro
export async function editarLivro(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const { titulo, autor, editora, genero, preco, quantidade } = req.body ?? {};

    const data: Prisma.LivroUpdateInput = {};

    if (titulo !== undefined) data.titulo = titulo;
    if (autor !== undefined) data.autor = autor;
    if (editora !== undefined) data.editora = editora;
    if (genero !== undefined) data.genero = genero;

    if (preco !== undefined) {
      if (!Number.isFinite(Number(preco)) || Number(preco) <= 0) {
        return res.status(400).json({ erro: "Preço inválido." });
      }
      data.preco = Number(preco);
    }

    if (quantidade !== undefined) {
      if (!Number.isInteger(Number(quantidade)) || Number(quantidade) < 0) {
        return res.status(400).json({ erro: "Quantidade inválida." });
      }
      data.quantidade = Number(quantidade);
    }

    const livro = await prisma.livro.update({ where: { id }, data });

    return res.json(livro);
  } catch (erro: any) {
    if (erro.code === "P2025") {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao editar livro." });
  }
}

// Excluir livro
export async function excluirLivro(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    // Remove o estoque do livro antes (evita erro de chave estrangeira)
    await prisma.estoque.deleteMany({ where: { livroId: id } });

    await prisma.livro.delete({ where: { id } });

    return res.json({ mensagem: "Livro excluído!" });
  } catch (erro: any) {
    if (erro.code === "P2025") {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao excluir livro." });
  }
}