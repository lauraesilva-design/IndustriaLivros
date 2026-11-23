
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Cadastrar entrega
export async function cadastrarEntrega(req: Request, res: Response) {
  try {
    const { pedidoId, endereco, dataEntrega, status } = req.body;

    const entrega = await prisma.entrega.create({
      data: {
        pedidoId: Number(pedidoId),
        endereco,
        dataEntrega: new Date(dataEntrega),
        status: status || "Pendente"
      }
    });

    return res.status(201).json(entrega);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao cadastrar entrega." });
  }
}

// Listar entregas
export async function listarEntregas(req: Request, res: Response) {
  try {
    const entregas = await prisma.entrega.findMany({
      include: {
        pedido: true
      }
    });

    return res.json(entregas);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar entregas." });
  }
}

// Atualizar entrega
export async function atualizarEntrega(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const entrega = await prisma.entrega.update({
      where: { id },
      data: req.body
    });

    return res.json(entrega);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao atualizar entrega." });
  }
}
