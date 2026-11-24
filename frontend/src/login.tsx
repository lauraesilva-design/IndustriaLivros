
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="formulario">
      <h1>Entrar na CPL</h1>
      <p>Acesse sua conta</p>

      <form>
        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" required />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" required />

        <button type="submit">Entrar</button>
      </form>

      <p>Não possui conta?</p>
      <Link to="/cadastro">Cadastre-se</Link>

      <br />
      <Link to="/">Voltar ao início</Link>
    </main>
  );
}

export default Login;
