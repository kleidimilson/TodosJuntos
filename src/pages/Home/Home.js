import React from 'react';
import {Link} from 'react-router-dom';


import {FaBookOpen} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaHamburger} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';

import {FaCommentDollar} from 'react-icons/fa';
import {FaGlassMartini} from 'react-icons/fa';
import {MdLocalHospital} from 'react-icons/md';
import {MdWork} from 'react-icons/md';
import {MdLocalGroceryStore} from 'react-icons/md';
import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/menu/Menu';
function Home() {
  // LINKS APONTANDO PARA A PAGINA DE ANUNCIOS POR ENQUANTO
 
  return (
    <>
       <Navbar/>
        <Menu/>
       <header>
         <img src={'https://firebasestorage.googleapis.com/v0/b/todosjuntos-d06c3.appspot.com/o/banner-apoie-o-local-02-07.jpg?alt=media&token=68a2c216-7ce6-4d2c-b347-73314989823f'} width="100%" height="150%" alt="imagem"/>
       </header>
       <br></br>
       <main id="main">
        
    
          <p id="title">Escolha uma categoria:</p>
          <div className="itens">
           <div className="item">
               <Link to="/anuncios/lanches" style={{ textDecoration: 'none', color: '#818689;' }}>
                 <FaHamburger color="#F6A32D" size={60}/>
                 <p>Lanches</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios/bebidas">
                <FaGlassMartini color="#F6A32D" size={60}/>
                <p>Bebidas</p>
              </Link>
              
            </div>
            <div className="item">
              <Link to="/anuncios/hospitais">
                <FaHospitalAlt color="#F6A32D" size={60}/>
                <p>Hospitais</p>
              </Link>
              
            </div>
            <div className="item">
                <Link to="/anuncios/farmacias">
                  <MdLocalHospital color="#F6A32D" size={60}/>
                  <p>Farmácias</p>
                </Link>
            </div>
            <div className="item">
               <Link to="/anuncios/lojas">
                 <FaStore  color="#F6A32D" size={60}/>
                 <p>Lojas</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios/mercados">
                <MdLocalGroceryStore color="#F6A32D" size={60}/>
                <p>Mercados</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios/artesanato">
                <FaCommentDollar color="#F6A32D" size={60}/>
                <p>Artesanato</p>
                </Link>
            </div>
          
          
            <div className="item">
               <Link to="/anuncios/servicos">
                <MdWork color="#F6A32D" size={60}/>
                <p>Vagas</p>
               </Link>
            </div>
            <div className="item">
              <Link to="/anuncios/cursos">
                <FaBookOpen color="#F6A32D" size={60}/>
                <p>Cursos</p>
                </Link>
            </div>
          
            
          </div>
       </main>

    </>
  );
}

export default Home;
