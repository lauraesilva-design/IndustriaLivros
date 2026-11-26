import { Router } from "express";

import { login } from "./controllers/auths.js";

import {
  cadastrarCliente,
  listarClientes,
  editarCliente,
  excluirCliente
} from "./controllers/clientes.js";

import {
  cadastrarEntrega,
  listarEntregas
} from "./controllers/entrega.js";

import { listarEstoque } from "./controllers/estoque.js";

import {
  cadastrarFuncionario,
  listarFuncionarios,
  editarFuncionario,
  excluirFuncionario
} from "./controllers/funcionarios.js";

import {
  cadastrarLivro,
  listarLivros,
  editarLivro,
  excluirLivro
} from "./controllers/livros.js";

import {
  cadastrarPedido,
  listarPedidos,
  excluirPedido
} from "./controllers/pedido.js";

import {
  cadastrarVenda,
  listarVendas,
  excluirVenda
} from "./controllers/venda.js";

const router = Router();

// AUTENTICAÇÃO
router.post("/login", login);

// CLIENTES
router.post("/clientes", cadastrarCliente);
router.get("/clientes", listarClientes);
router.put("/clientes/:id", editarCliente);
router.delete("/clientes/:id", excluirCliente);

// ENTREGAS
router.post("/entregas", cadastrarEntrega);
router.get("/entregas", listarEntregas);

// ESTOQUE
router.get("/estoque", listarEstoque);

// FUNCIONÁRIOS
router.post("/funcionarios", cadastrarFuncionario);
router.get("/funcionarios", listarFuncionarios);
router.put("/funcionarios/:id", editarFuncionario);
router.delete("/funcionarios/:id", excluirFuncionario);

// LIVROS
router.post("/livros", cadastrarLivro);
router.get("/livros", listarLivros);
router.put("/livros/:id", editarLivro);
router.delete("/livros/:id", excluirLivro);

// PEDIDOS
router.post("/pedidos", cadastrarPedido);
router.get("/pedidos", listarPedidos);
router.delete("/pedidos/:id", excluirPedido);

// VENDAS
router.post("/vendas", cadastrarVenda);
router.get("/vendas", listarVendas);
router.delete("/vendas/:id", excluirVenda);

export default router;