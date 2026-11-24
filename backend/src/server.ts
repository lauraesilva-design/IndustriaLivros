import express from "express";
import prisma from "./config/prisma.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await prisma.$connect();

    res.send("CPL conectada ao banco SQLite!");
  } catch (erro) {
    res.status(500).send("Erro ao conectar ao banco.");
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});