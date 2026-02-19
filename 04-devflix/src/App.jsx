import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./Componentes/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logotipo da plataforma de streaming DEVFLIX em destaque, com letras vermelhas sobre fundo preto, representando conteúdo de entretenimento online."
      />
      <div className="search">
        <input type="text" placeholder="Pesquise por filme e serie..." />
        <img src={lupa} alt="Botão  de ação para pesquisa!" />
      </div>
      <Rodape link={"https://github.com/Larissa016"}>Larissa</Rodape>
    </div>
  );
};

export default App;
