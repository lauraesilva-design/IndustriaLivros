import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

// Login do funcionário
export async function login(req: Request, res: Response) {
  try {
    const { email, senha } = req.body ?? {};

    if (!email || !senha) {
      return res.status(400).json({ erro: "Informe email e senha." });
    }

    const segredo = process.env.JWT_SECRET;
    if (!segredo) {
      console.error("JWT_SECRET não definido no .env");
      return res.status(500).json({ erro: "Erro de configuração do servidor." });
    }

    const funcionario = await prisma.funcionario.findUnique({
      where: { email }
    });

    // Mesma mensagem para email ou senha errados
    if (!funcionario) {
      return res.status(401).json({ erro: "Email ou senha inválidos." });
    }

    const senhaCorreta = await bcrypt.compare(senha, funcionario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ erro: "Email ou senha inválidos." });
    }

    const token = jwt.sign(
      { id: funcionario.id, email: funcionario.email, cargo: funcionario.cargo },
      segredo,
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      funcionario: {
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
        cargo: funcionario.cargo
      }
    });
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao fazer login." });
  }
}

// Middleware para proteger rotas (opcional)
export function autenticar(req: Request, res: Response, next: NextFunction) {
  try {
    const cabecalho = req.headers.authorization;

    if (!cabecalho || !cabecalho.startsWith("Bearer ")) {
      return res.status(401).json({ erro: "Token não informado." });
    }

    const token = cabecalho.slice(7);
    const segredo = process.env.JWT_SECRET;

    if (!segredo) {
      console.error("JWT_SECRET não definido no .env");
      return res.status(500).json({ erro: "Erro de configuração do servidor." });
    }

    jwt.verify(token, segredo);

    return next();
  } catch (erro) {
    return res.status(401).json({ erro: "Token inválido ou expirado." });
  }
}