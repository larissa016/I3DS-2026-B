
import './App.css'
import Links from './components/Links/Links'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape'
import SocialLinks from './components/SocialLinks/SocialLinks'

function App() {
 

  return (

    <div id="App">

      <Perfil fotoPerfil={"https://placehold.co/100"}> Larissa</Perfil>

      <div className="switch"> botão switch</div>
      
<div id="Links">
      <ul>
      <Links url={""}>Inscreva-se</Links>
      <Links url={""}>Minha playlist</Links>
      <Links url={""}>Me pegue um café!</Links>
      <Links url={""}>Conheça o curso DEV</Links>
      </ul>
</div>

<div id="SocialLinks">
        <SocialLinks url={"https://github.com"} icon={"logo-github"} />
        <SocialLinks url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLinks url={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLinks url={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>

      <Rodape>Larissa</Rodape>

    </div>
  )
}

export default App
