import { useEffect, useState } from "react";
import "./App.css";

import lupa from "./assets/search.svg";
import Lariflix from "./assets/Lariflix.png";
import Rodape from "./Componentes/Rodape/Rodape";
import Moviecard from "./Componentes/Moviecard/Moviecard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search || []);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await searchMovies("Chucky");
    };
    fetchMovies();
  }, []);

  return (
    <div id="App">
      <img src={Lariflix} alt="" height="450px" />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes e séries..."
        />

        <img onClick={() => searchMovies(search)} src={lupa} alt="buscar" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <Moviecard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😔 Filme não encontrado</h2>
      )}

      <Rodape link={"https://github.com/Larissa016"}>Larissa</Rodape>
    </div>
  );
};

export default App;
