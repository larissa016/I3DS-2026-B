import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./Componentes/Rodape/Rodape";
import Moviecard from "./Componentes/Moviecard/Moviecard";

const App = () => {
  const [movies, setMovies] = useState([]);

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando a variavel movies
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("chucky");
  }, []);

  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Imagem do logo da plataforma de streaming Devflix, com fundo preto e letras vermelhas destacando o nome. Ideal para promover o serviço de streaming de filmes e séries, com destaque para conteúdo de alta qualidade."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie, index) => (
          <Moviecard key={index} {...movie} />
        ))}
      </div>
    )
    :
    (
      <h2>😔 filme não encontrado</h2>
    )};

      <Rodape link={"https://github.com/Larissa016"}>Larissa</Rodape>
    </div>
  );
};

export default App;
