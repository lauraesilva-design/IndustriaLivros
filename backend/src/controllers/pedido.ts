
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Cadastrar pedido
export async function cadastrarPedido(req: Request, res: Response) {
  try {
    const { clienteId, valorTotal, status } = req.body;

    const pedido = await prisma.pedido.create({
      data: {
        clienteId: Number(clienteId),
        valorTotal: Number(valorTotal),
        status: status || "Pendente"
      }
    });

    return res.status(201).json(pedido);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao cadastrar pedido." });
  }
}

// Listar pedidos
export async function listarPedidos(req: Request, res: Response) {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        cliente: true
      }
    });

    return res.json(pedidos);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar pedidos." });
  }
}

// Atualizar pedido
export async function atualizarPedido(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const pedido = await prisma.pedido.update({
      where: { id },
      data: req.body
    });

    return res.json(pedido);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao atualizar pedido." });
  }
}

// Excluir pedido
export async function excluirPedido(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    await prisma.pedido.delete({
      where: { id }
    });

    return res.json({ mensagem: "Pedido excluído!" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao excluir pedido." });
  }
}
