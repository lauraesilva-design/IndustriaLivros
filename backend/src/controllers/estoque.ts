
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Listar estoque
export async function listarEstoque(req: Request, res: Response) {
  try {
    const estoque = await prisma.estoque.findMany({
      include: {
        livro: true
      }
    });

    return res.json(estoque);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao consultar estoque." });
  }
}

// Cadastrar ou atualizar estoque
export async function atualizarEstoque(req: Request, res: Response) {
  try {
    const { livroId, quantidade } = req.body;

    const estoque = await prisma.estoque.upsert({
      where: {
        livroId: Number(livroId)
      },
      update: {
        quantidade: Number(quantidade)
      },
      create: {
        livroId: Number(livroId),
        quantidade: Number(quantidade)
      }
    });

    return res.json(estoque);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao atualizar estoque." });
  }
}
