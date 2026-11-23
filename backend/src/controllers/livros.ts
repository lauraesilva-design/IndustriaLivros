
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Cadastrar livro
export async function cadastrarLivro(req: Request, res: Response) {
  try {
    const { titulo, autor, editora, genero, preco, quantidade } = req.body;

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
    return res.status(500).json({ erro: "Erro ao cadastrar livro." });
  }
}

// Listar livros
export async function listarLivros(req: Request, res: Response) {
  try {
    const livros = await prisma.livro.findMany();

    return res.json(livros);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar livros." });
  }
}

// Editar livro
export async function editarLivro(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const livro = await prisma.livro.update({
      where: { id },
      data: req.body
    });

    return res.json(livro);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao editar livro." });
  }
}

// Excluir livro
export async function excluirLivro(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    await prisma.livro.delete({
      where: { id }
    });

    return res.json({ mensagem: "Livro excluído!" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao excluir livro." });
  }
}
