import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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