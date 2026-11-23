
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

// Cadastrar cliente
export async function cadastrarCliente(req: Request, res: Response) {
  try {
    const { nome, email, telefone, endereco } = req.body;

    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        telefone,
        endereco
      }
    });

    return res.status(201).json(cliente);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao cadastrar cliente." });
  }
}

// Listar clientes
export async function listarClientes(req: Request, res: Response) {
  try {
    const clientes = await prisma.cliente.findMany();

    return res.json(clientes);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar clientes." });
  }
}

// Editar cliente
export async function editarCliente(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const cliente = await prisma.cliente.update({
      where: { id },
      data: req.body
    });

    return res.json(cliente);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao editar cliente." });
  }
}

// Excluir cliente
export async function excluirCliente(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    await prisma.cliente.delete({
      where: { id }
    });

    return res.json({ mensagem: "Cliente excluído!" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao excluir cliente." });
  }
}
