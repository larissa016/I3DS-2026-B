import { useEffect, useState } from "react";
import "./App.css";

import lupa from "./assets/search.svg";
import lariflixx from "./assets/lariflixx.png";
import chucky from "./assets/chucky.png";
import Rodape from "./Componentes/Rodape/Rodape";
import Moviecard from "./Componentes/Moviecard/Moviecard";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [tema, setTema] = useState("dark");

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  /* FUNÇÃO PARA TRADUZIR */
  const traduzir = async (texto) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(texto)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0];
  };

  /* BUSCAR FILMES */
  const searchMovies = async (title) => {

    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    if (data.Search) {

      const filmesTraduzidos = await Promise.all(
        data.Search.map(async (movie) => {

          const tituloTraduzido = await traduzir(movie.Title);

          return {
            ...movie,
            Title: tituloTraduzido
          };

        })
      );

      setMovies(filmesTraduzidos);

    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await searchMovies("Chucky");
    };
    fetchMovies();
  }, []);

  return (

    <div id="App" className={tema}>

      {/* SANGUE */}
      <div className="blood"></div>

      {/* BOTÃO TEMA */}
      <div className="tema">

        <button onClick={() => setTema("light")}>
          ☀️ Light
        </button>

        <button onClick={() => setTema("dark")}>
          🌙 Dark
        </button>

      </div>

      {/* LOGO */}
      <img src={lariflixx} alt="lariflixx" className="lariflixx" height="450" />

      {/* CATEGORIAS */}
      <div className="categorias">

      <div className="categorias">

<button onClick={() => searchMovies("Horror")}>🩸 Terror</button>

<button onClick={() => searchMovies("Thriller")}>🔪 Suspense</button>

<button onClick={() => searchMovies("Slasher")}>🪓 Terror com assassino</button>

<button onClick={() => searchMovies("Ghost")}>👻 Fantasma</button>

<button onClick={() => searchMovies("Zombie")}>🧟 Zumbi</button>

<button onClick={() => searchMovies("Vampire")}>🧛 Vampiro</button>

</div>

      </div>

      {/* CHUCKY LATERAL */}
      <img src={chucky} alt="chucky" className="chucky" height="800" />

      {/* BUSCA */}
      <div className="search">

        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes e séries..."
        />

        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="buscar"
        />

      </div>

      {/* FILMES */}
      {movies?.length > 0 ? (

        <div className="container">

          {movies.map((movie, index) => (
            <Moviecard
              key={index}
              {...movie}
              apiUrl={apiUrl}
            />
          ))}

        </div>

      ) : (

        <h2 className="empty">
          😔 Filme não encontrado
        </h2>

      )}

      <Rodape link={"https://github.com/Larissa016"}>
        Larissa
      </Rodape>

    </div>
  );
};

export default App;