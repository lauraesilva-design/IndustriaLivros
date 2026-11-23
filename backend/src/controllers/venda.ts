
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Registrar venda
export async function cadastrarVenda(req: Request, res: Response) {
  try {
    const { pedidoId, valor } = req.body;

    const venda = await prisma.venda.create({
      data: {
        pedidoId: Number(pedidoId),
        valor: Number(valor)
      }
    });

    return res.status(201).json(venda);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao registrar venda." });
  }
}

// Listar vendas
export async function listarVendas(req: Request, res: Response) {
  try {
    const vendas = await prisma.venda.findMany({
      include: {
        pedido: true
      }
    });

    return res.json(vendas);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar vendas." });
  }
}

// Excluir venda
export async function excluirVenda(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    await prisma.venda.delete({
      where: { id }
    });

    return res.json({ mensagem: "Venda excluída!" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao excluir venda." });
  }
}
