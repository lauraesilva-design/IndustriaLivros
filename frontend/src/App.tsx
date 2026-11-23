
import "./App.css";

function App() {
  return (
    <div className="pagina">

      <header>
        <h2 className="logo">CPL<span>.</span></h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="inicio" id="inicio">

        <div className="texto">
          <h1>Central de Página e Literatura</h1>

          <p>
            Organização, praticidade e controle
            para uma indústria de livros.
          </p>

          <a href="#sobre" className="botao">
            Conheça nosso sistema
          </a>
        </div>

        <div className="imagem">
          📚
        </div>

      </section>

      <section className="sobre" id="sobre">
        <h2>Sobre a CPL</h2>

        <p>
          Nosso sistema foi desenvolvido para facilitar
          o gerenciamento de uma indústria de livros,
          reunindo informações em um só lugar.
        </p>
      </section>

      <section className="funcionalidades" id="funcionalidades">

        <h2>O que você encontra no nosso sistema?</h2>

        <div className="cards">

          <div className="card">
            <span>📦</span>
            <h3>Estoque</h3>
            <p>Controle da quantidade de livros disponíveis.</p>
          </div>

          <div className="card">
            <span>📚</span>
            <h3>Livros</h3>
            <p>Cadastro e gerenciamento de livros.</p>
          </div>

          <div className="card">
            <span>🛒</span>
            <h3>Pedidos</h3>
            <p>Registro e acompanhamento de pedidos.</p>
          </div>

          <div className="card">
            <span>📊</span>
            <h3>Relatórios</h3>
            <p>Controle de vendas e movimentações.</p>
          </div>

        </div>
      </section>

      <footer id="contato">
        <h3>CPL - Central de Página e Literatura</h3>
        <p>Organizando processos, conectando histórias.</p>
        <p>© 2026 - Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
