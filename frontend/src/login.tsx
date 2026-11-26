import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "./images/logo.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    // coloque aqui a sua lógica de login
  }

  return (
    <div className="login-pagina">
      <div className="login-caixa">
        <img src={logo} alt="Logo CPL" className="login-logo" />

        <h1>Entrar na CPL</h1>
        <p className="login-subtitulo">Acesse sua conta</p>

        <form onSubmit={entrar} className="login-form">
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
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <p className="login-cadastro">
          Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        <Link to="/" className="login-voltar">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default Login;