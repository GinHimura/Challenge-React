import React,{useContext,} from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Index from './pages/index';
import Candidato from './pages/candidato';
import Empresa from './pages/empresa'
import Vagas from './pages/vaga'
import InfoVagas from './pages/infovagas'
import Chat from './componentes/chat';
import './css/styleHeadFoot.css';
import './css/styleIndex.css'
import './css/styleCandidato.css'
import './css/styleEmpresa.css'
import './css/styleVaga.css'
import './css/styleInfoVagas.css'

import MyContext, { Auth } from './context/auth';
import Login from './pages/login';

export default function App() {
  function RequireAuth({ children }) {
    
    const usuario = JSON.parse(localStorage.getItem("user")) || null;
    debugger;
    if (!usuario) {
      debugger;
      return <Navigate to="/" />
    }

    if (usuario?.candidato) {
      debugger;
      return <Navigate to="/" />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Header />
      <Auth>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/candidato' element={<Candidato />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/vagas' element={<RequireAuth><Vagas /></RequireAuth>} />
          <Route path='/infovagas' element={<InfoVagas />} />
        </Routes>
      </Auth>
      <Chat/>
      <Footer />
    </BrowserRouter>
  );
}