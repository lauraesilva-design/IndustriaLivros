import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "./images/logo.jpg";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar(e: React.FormEvent) {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    // coloque aqui a sua lógica de cadastro
  }

  return (
    <div className="login-pagina">
      <div className="login-caixa">
        <img src={logo} alt="Logo CPL" className="login-logo" />

        <h1>Criar conta</h1>
        <p className="login-subtitulo">Cadastre-se na CPL</p>

        <form onSubmit={cadastrar} className="login-form">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            id="confirmarSenha"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="login-cadastro">
          Já possui conta? <Link to="/login">Entrar</Link>
        </p>

        <Link to="/" className="login-voltar">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;