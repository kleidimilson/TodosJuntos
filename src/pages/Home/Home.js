import React from 'react';
import {Link} from 'react-router-dom';

import {MdLocationOn} from 'react-icons/md';

import {FaBookOpen} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaHamburger} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCommentDollar} from 'react-icons/fa';
import {FaGlassMartini} from 'react-icons/fa';
import {MdLocalHospital} from 'react-icons/md';
import {MdWork} from 'react-icons/md';

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
      
         <div className="banner">
              <h3>Bem vindo!!</h3>
              <p><MdLocationOn/>Campo Maior PI</p>
              <div className="input">
                <input type="text"/>
                <FaSearch id="icon-search" color="#FF6914"/>
              </div>
              <Link to="/anunciar">Fazer um Anúncio</Link>
         </div>
       </header>
       <br></br>
       <main>
        
          
          <h3>Escolha uma categoria:</h3>
          <div className="itens">
           <div className="item">
               <Link to="/anuncios">
                 <FaHamburger color="#FF6914" size={60}/>
                 <p>Lanches</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaGlassMartini color="#FF6914" size={60}/>
                <p>Bebidas</p>
              </Link>
              
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaHospitalAlt color="#FF6914" size={60}/>
                <p>Hospitais</p>
              </Link>
              
            </div>
            
            <div className="item">
               <Link to="/anuncios">
                 <FaStore  color="#FF6914" size={60}/>
                 <p>Lojas</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaCommentDollar color="#FF6914" size={60}/>
                <p>Promoções</p>
                </Link>
            </div>
          
            <div className="item">
                <Link to="/anuncios">
                  <MdLocalHospital color="#FF6914" size={60}/>
                  <p>Farmácias</p>
                </Link>
            </div>
            <div className="item">
               <Link to="/anuncios">
                <MdWork color="#FF6914" size={60}/>
                <p>Profissionais</p>
               </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaBookOpen color="#FF6914" size={60}/>
                <p>Cursos</p>
                </Link>
            </div>
          
            
          </div>
       </main>

    </>
  );
}

export default Home;
