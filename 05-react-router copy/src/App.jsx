
import { Route, Routes } from 'react-router';
import './App.css'

import Sobre from "./pages/Sobre";
import Home from './pages/Home';
import Header from './components/header/Header';
import Contato from './pages/Contato'
import NãoEncontrado from './pages/NãoEncontrado';
import Rodape from './components/rodape/Rodape'

function App() {
 
  return (
    <>
    <Header />
    <div className='containerApp'>
    <Routes />
      <Routes> {/* Identifica todas s rotas de sistema*/}
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path = "/contato" element={<Contato />} />
        <Route path = "/nãoencontrado" element={<NãoEncontrado />} />
      </Routes>
      </div>

      <Rodape>Larissa</Rodape>
    </>
  )
}

export default App
