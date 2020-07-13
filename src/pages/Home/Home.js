import React from 'react';
import {Link} from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';

import {FaBookOpen} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaHamburger} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';

import {FaCommentDollar} from 'react-icons/fa';
import {FaGlassMartini} from 'react-icons/fa';
import {MdLocalHospital} from 'react-icons/md';
import {MdWork} from 'react-icons/md';

import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/menu/Menu';
function Home() {
  // LINKS APONTANDO PARA A PAGINA DE ANUNCIOS POR ENQUANTO
   const slideImagens = [
     `${banner1}`,
     `${banner2}`,
     `${banner3}`,
   ]
  return (
    <>
       <Navbar/>
        <Menu/>
       <header>
      
       <Slide id="banner">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[0]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[0]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[0]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
         
        </Slide>
       </header>
       <br></br>
       <main>
        
    
          <h3>Escolha uma categoria:</h3>
          <div className="itens">
           <div className="item">
               <Link to="/anuncios">
                 <FaHamburger color="#F6A32D" size={60}/>
                 <p>Lanches</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaGlassMartini color="#F6A32D" size={60}/>
                <p>Bebidas</p>
              </Link>
              
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaHospitalAlt color="#F6A32D" size={60}/>
                <p>Hospitais</p>
              </Link>
              
            </div>
            
            <div className="item">
               <Link to="/anuncios">
                 <FaStore  color="#F6A32D" size={60}/>
                 <p>Lojas</p>
                </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
                <FaCommentDollar color="#F6A32D" size={60}/>
                <p>Promoções</p>
                </Link>
            </div>
          
            <div className="item">
                <Link to="/anuncios">
                  <MdLocalHospital color="#F6A32D" size={60}/>
                  <p>Farmácias</p>
                </Link>
            </div>
            <div className="item">
               <Link to="/anuncios">
                <MdWork color="#F6A32D" size={60}/>
                <p>Profissionais</p>
               </Link>
            </div>
            <div className="item">
              <Link to="/anuncios">
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
