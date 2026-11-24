
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <main className="formulario">
      <h1>Criar conta</h1>
      <p>Cadastre-se na CPL</p>

      <form>
        <label>Nome completo</label>
        <input type="text" placeholder="Digite seu nome" required />

        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" required />

        <label>Senha</label>
        <input type="password" placeholder="Crie uma senha" required />

        <label>Confirmar senha</label>
        <input type="password" placeholder="Confirme sua senha" required />

        <button type="submit">Cadastrar</button>
      </form>

      <p>Já possui conta?</p>
      <Link to="/login">Entrar</Link>

      <br />
      <Link to="/">Voltar ao início</Link>
    </main>
  );
}

export default Cadastro;
