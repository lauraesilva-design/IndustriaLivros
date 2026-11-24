
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="pagina">

      {/* CABEÇALHO */}
      <header className="cabecalho">
        <a href="#inicio" className="marca">
          <img src="/logo.jpg" alt="Logo CPL" />
          <div>
            <h2>CPL.</h2>
            <span>Central de Página e Literatura</span>
          </div>
        </a>

        <nav className="navegacao">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#contato">Contato</a>
          <Link to="/login" className="botao-login">
            Login
          </Link>
        </nav>

        <button
          className="botao-menu"
          onClick={() => setMenuAberto(true)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
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
            >
              ×
            </button>

            <img src="/logo.jpg" alt="CPL" />

            <h2>Bem-vindo à CPL</h2>
            <p>Central de Página e Literatura</p>

            <nav>
              <a href="#inicio" onClick={() => setMenuAberto(false)}>
                Início
              </a>
              <a href="#sobre" onClick={() => setMenuAberto(false)}>
                Sobre a empresa
              </a>
              <a href="#funcionalidades" onClick={() => setMenuAberto(false)}>
                Funcionalidades
              </a>
              <a href="#contato" onClick={() => setMenuAberto(false)}>
                Contato
              </a>
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
  id="inicio"
  style={{
  backgroundImage: `url("${process.env.PUBLIC_URL}/livros.cpl.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center"
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

          <a href="#funcionalidades" className="botao-principal">
            Conheça nosso sistema
            <span>→</span>
          </a>
        </div>

        <div className="destaque-logo">
          <img src="/logo.jpg" alt="Logo CPL" />
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

      {/* FUNCIONALIDADES */}
      <section className="funcionalidades" id="funcionalidades">
        <div className="titulo-secao">
          <span className="etiqueta">GESTÃO COMPLETA</span>
          <h2>O que você encontra na CPL?</h2>
          <p>
            Conheça as principais ferramentas disponíveis
            em nossa plataforma.
          </p>
        </div>

        <div className="cards">

          <article className="card">
            <div className="icone">📚</div>
            <h3>Produtos</h3>
            <p>
              Cadastro e gerenciamento dos livros
              disponíveis na indústria.
            </p>
          </article>

          <article className="card">
            <div className="icone">📦</div>
            <h3>Estoque</h3>
            <p>
              Controle de quantidades e disponibilidade
              dos produtos.
            </p>
          </article>

          <article className="card">
            <div className="icone">🛒</div>
            <h3>Pedidos</h3>
            <p>
              Organização e acompanhamento dos
              pedidos realizados.
            </p>
          </article>

          <article className="card">
            <div className="icone">📈</div>
            <h3>Vendas</h3>
            <p>
              Gerenciamento das vendas e movimentações
              comerciais.
            </p>
          </article>

          <article className="card">
            <div className="icone">🚚</div>
            <h3>Distribuição</h3>
            <p>
              Acompanhamento da distribuição
              dos livros.
            </p>
          </article>

          <article className="card">
            <div className="icone">📊</div>
            <h3>Relatórios</h3>
            <p>
              Informações para auxiliar na gestão
              e nas decisões.
            </p>
          </article>

        </div>
      </section>

      {/* CHAMADA PARA ACESSO */}
      <section
  className="chamada"
  id="contato"
  style={{
    backgroundImage: `linear-gradient(90deg, rgba(9,22,40,.93), rgba(9,22,40,.78)), url("/livros.cpl.png")`
  }}
>
        <div className="chamada-texto">
          <span className="etiqueta">SUA GESTÃO EM UM SÓ LUGAR</span>
          <h2>Conheça a plataforma CPL</h2>
          <p>
            Tenha mais praticidade e organização
            nos processos da indústria de livros.
          </p>
        </div>

        <Link to="/login" className="botao-principal">
          Acessar plataforma
          <span>→</span>
        </Link>
      </section>

      {/* RODAPÉ */}
      <footer className="rodape">
        <div className="rodape-marca">
          <img src="/logo.jpg" alt="CPL" />
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
