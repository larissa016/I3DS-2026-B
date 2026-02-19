
import { useEffect } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./Componentes/Rodape/Rodape";
import Moviecard from "./Componentes/Moviecard/Moviecard";

const App = () => {
const [ movies,setMovies]= userState([]);

//utilizando uma chave de API do aquivo. env
const apiKey = import. meta.env.VITE_OMDB_API_KEY;
 const apiUrl= 'https://omdbapi.com/?apikey= ${apikey}'; 

 // criando a conexão com a API e trazendo informações

 const searchMovies = async (title) => {
  const response = await fetch('${apiUrl}&s=${title}');
  const data = await response.json;

  //Alimenrando a variedade movies
  setMovies(data.search);
 };

useEffect(() => {
  searchMovies("Batman");
}, []);


  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logotipo da plataforma de streaming DEVFLIX em destaque, com letras vermelhas sobre fundo preto, representando conteúdo de entretenimento online."
      />
      <div className="search">
        <input type="text" placeholder="Pesquise por filme e serie..." />
        <img src={lupa} alt="Botão  de ação para pesquisa!" />
      </div>

<>

</>
<div classname="container"><movies.map(movie </div>
      <Rodape link={"https://github.com/Larissa016"}>Larissa</Rodape>
    </div>
  );
};

export default App;
