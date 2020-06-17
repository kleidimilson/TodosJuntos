import React from 'react';
import {Link} from 'react-router-dom';

import {MdLocationOn} from 'react-icons/md';

import {FaBookOpen} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaHamburger} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {MdLocalHospital} from 'react-icons/md';
import {MdWork} from 'react-icons/md';

import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/menu/Menu';
function Home() {
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
                <FaSearch id="icon-search" color="#28a745"/>
              </div>
              <a href="https://www.vakinha.com.br/vaquinhas/explore" >Ajude o projeto</a>
         </div>
       </header>
       <br></br>
       <main>
        
       
          <h3>Escolha uma categoria:</h3>
          <div className="itens">
           <div className="item">
               <Link to="/lanches">
                 <FaHamburger color="#28a745" size={60}/>
                 <p>Lanches</p>
                </Link>
            </div>
            <div className="item">
              <Link>
                <FaHospitalAlt color="#28a745" size={60}/>
                <p>Hospitais</p>
              </Link>
              
            </div>
            
            <div className="item">
               <Link>
                 <FaStore  color="#28a745" size={60}/>
                 <p>Lojas</p>
                </Link>
            </div>
            <div className="item">
                <Link>
                  <MdLocalHospital color="#28a745" size={60}/>
                  <p>Farmácias</p>
                </Link>
            </div>
            <div className="item">
               <Link>
                <MdWork color="#28a745" size={60}/>
                <p>Profissionais</p>
               </Link>
            </div>
            <div className="item">
              <Link>
                <FaBookOpen color="#28a745" size={60}/>
                <p>Cursos</p>
                </Link>
            </div>
          
            
          </div>
       </main>

    </>
  );
}

export default Home;
