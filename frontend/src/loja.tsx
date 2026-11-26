import { useState } from "react";
import { Link } from "react-router-dom";
import "./loja.css";

type Livro = {
  id: number;
  titulo: string;
  preco: number;
  parcelas: number;
  nota: number;
  imagem?: string;
};

const livros: Livro[] = [
  { id: 1, titulo: "Box Coleção Harry Potter – 5 Kits (35 Livros) | J.K. Rowling | Editora Rocco", preco: 1500, parcelas: 10, nota: 4.5 },
  { id: 2, titulo: "Box É Assim Que Acaba + É Assim Que Começa – 5 Kits (10 Livros) | Colleen Hoover | Editora Galera", preco: 549.5, parcelas: 5, nota: 5.0 },
  { id: 3, titulo: "Box Kit O Fabricante de Lágrimas – 5 Livros | Erin Doom | Editora HarperCollins", preco: 199.9, parcelas: 4, nota: 4.6 },
  { id: 4, titulo: "Box Especial A Seleção – 5 Kits (30 Livros) | Kiera Cass | Editora Seguinte", preco: 999.5, parcelas: 10, nota: 4.9 },
  { id: 5, titulo: "O Pequeno Príncipe – 5 Livros | Antoine de Saint-Exupéry | Editora HarperCollins", preco: 99.9, parcelas: 3, nota: 4.8 },
  { id: 6, titulo: "Box Kit Drácula – 5 Livros | Bram Stoker | Editora DarkSide Books", preco: 249.9, parcelas: 5, nota: 4.8 },
  { id: 7, titulo: "Box Kit Quarta Asa – 5 Livros | Rebecca Yarros | Editora Planeta Minotauro", preco: 299.9, parcelas: 5, nota: 4.9 },
  { id: 8, titulo: "Box O Diário de uma Princesa Desastrada – 5 Kits (20 Livros) | Maidy Lacerda | Editora Outro Planeta", preco: 1349.5, parcelas: 10, nota: 4.9 },
];

function moeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Loja() {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [carrinho, setCarrinho] = useState<number[]>([]);

  const filtrados = livros.filter((l) =>
    l.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]
    );
  }

  function adicionar(id: number) {
    setCarrinho((atual) => [...atual, id]);
  }

  return (
    <div className="loja-pagina">
      <header className="loja-cabecalho">
        <Link to="/login" className="loja-icone" aria-label="Minha conta">
          👤
        </Link>

        <div className="loja-busca">
          <input
            type="text"
            placeholder="Pesquisar livros pelo Nome"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <span>🔍</span>
        </div>

        <div className="loja-acoes">
          <button className="loja-icone" aria-label="Favoritos">
            ♡
            {favoritos.length > 0 && (
              <small className="loja-contador">{favoritos.length}</small>
            )}
          </button>
          <button className="loja-icone" aria-label="Carrinho">
            🛒
            {carrinho.length > 0 && (
              <small className="loja-contador">{carrinho.length}</small>
            )}
          </button>
        </div>
      </header>

      <main className="loja-conteudo">
        <Link to="/" className="loja-voltar">
          ← Voltar ao início
        </Link>

        {filtrados.length === 0 ? (
          <p className="loja-vazio">Nenhum livro encontrado.</p>
        ) : (
          <div className="loja-grade">
            {filtrados.map((livro) => (
              <article className="produto" key={livro.id}>
                <div className="produto-imagem">
                  {livro.imagem ? (
                    <img src={livro.imagem} alt={livro.titulo} />
                  ) : (
                    <span>📚</span>
                  )}
                </div>

                <div className="produto-pontos">
                  <i className="ativo"></i>
                  <i></i>
                </div>

                <div className="produto-titulo">
                  <button
                    className={`produto-favorito ${
                      favoritos.includes(livro.id) ? "ativo" : ""
                    }`}
                    onClick={() => alternarFavorito(livro.id)}
                    aria-label="Favoritar"
                  >
                    {favoritos.includes(livro.id) ? "♥" : "♡"}
                  </button>
                  <p>{livro.titulo}</p>
                </div>

                <strong className="produto-preco">{moeda(livro.preco)}</strong>

                <div className="produto-linha">
                  <span>
                    {livro.parcelas}x de{" "}
                    <em>{moeda(livro.preco / livro.parcelas)}</em> sem juros
                  </span>
                  <span className="produto-nota">
                    {livro.nota.toFixed(1).replace(".", ",")} <b>★</b>
                  </span>
                </div>

                <button
                  className="produto-botao"
                  onClick={() => adicionar(livro.id)}
                >
                  Adicionar ao Carrinho
                </button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Loja;