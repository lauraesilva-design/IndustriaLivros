
import type { Request, Response } from "express";
import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";

// Cadastrar funcionário
export async function cadastrarFuncionario(req: Request, res: Response) {
  try {
    const { nome, email, senha, telefone, cargo } = req.body;

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const funcionario = await prisma.funcionario.create({
      data: {
        nome,
        email,
        senha: senhaCriptografada,
        telefone,
        cargo
      }
    });

    return res.status(201).json({
      mensagem: "Funcionário cadastrado!",
      funcionario: {
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
        cargo: funcionario.cargo
      }
    });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao cadastrar funcionário." });
  }
}

// Listar funcionários
export async function listarFuncionarios(req: Request, res: Response) {
  try {
    const funcionarios = await prisma.funcionario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cargo: true
      }
    });

    return res.json(funcionarios);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao listar funcionários." });
  }
}

// Editar funcionário
export async function editarFuncionario(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const funcionario = await prisma.funcionario.update({
      where: { id },
      data: req.body
    });

    return res.json(funcionario);
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao editar funcionário." });
  }
}

// Excluir funcionário
export async function excluirFuncionario(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    await prisma.funcionario.delete({
      where: { id }
    });

    return res.json({ mensagem: "Funcionário excluído!" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao excluir funcionário." });
  }
}
