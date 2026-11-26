import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./images/logo.jpg";
import fundoLivros from "./images/livros.cpl.png";



function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="pagina">

      {/* CABEÇALHO */}
      <header className="cabecalho">
  <a href="#inicio" className="marca">
    <div>
      <h2>CPL.</h2>
      <span>Central de Página e Literatura</span>
    </div>
  </a>

  <div className="acoes-cabecalho">
    <Link to="/login" className="botao-login">
      Login
    </Link>

    <button
      className="botao-menu"
      onClick={() => setMenuAberto(true)}
      aria-label="Abrir menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>

      {/* MENU LATERAL */}
      {menuAberto && (
        <>
          <div
            className="fundo-menu"
            onClick={() => setMenuAberto(false)}
          />

          <aside className="menu-lateral">
            <button
              className="fechar-menu"
              onClick={() => setMenuAberto(false)}
              aria-label="Fechar menu"
            >
            </button>

            <img src={logo} alt="CPL" />

            <h2>Bem-vindo à CPL</h2>
            <p>Central de Página e Literatura</p>

            <nav>
              <Link to="/login" onClick={() => setMenuAberto(false)}>
                Acessar plataforma
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* BANNER PRINCIPAL */}
      <section
  className="inicio"
  style={{
    backgroundImage: `linear-gradient(90deg, rgba(8,20,38,0.94) 0%, rgba(8,20,38,0.78) 48%, rgba(8,20,38,0.25) 100%), url(${fundoLivros})`,
  }}
>
        <div className="inicio-conteudo">
          <span className="etiqueta">
            ORGANIZAÇÃO • LITERATURA • TECNOLOGIA
          </span>

          <h1>
            Central de Página e
            <br />
            <span>Literatura</span>
          </h1>

          <p>
            Organização, praticidade e controle para
            uma indústria de livros.
          </p>

          <Link to="/loja" className="botao-principal">
  Acesse nosso site
  <span>→</span>
</Link>
        </div>

        <div className="destaque-logo">
          <img src={logo} alt="Logo CPL" />
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <span className="etiqueta">CONHEÇA NOSSA EMPRESA</span>

        <h2>Sobre a CPL</h2>

        <div className="linha-decorativa"></div>

        <p>
          Nosso sistema foi desenvolvido para facilitar
          o gerenciamento de uma indústria de livros,
          reunindo informações e processos em um só lugar.
          <br />
          Mais organização, praticidade e eficiência
          para o dia a dia.
        </p>
      </section>

      

      {/* RODAPÉ */}
      <footer className="rodape">
        <div className="rodape-marca">
          <div>
            <h3>CPL.</h3>
            <p>Central de Página e Literatura</p>
          </div>
        </div>

        <span>
          © 2026 CPL - Todos os direitos reservados.
        </span>
      </footer>

          </div>
  );
}

export default App;
