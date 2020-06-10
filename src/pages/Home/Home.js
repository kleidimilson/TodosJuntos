import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import {AiFillNotification} from 'react-icons/ai';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {FaBookOpen} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaHamburger} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {MdLocalHospital} from 'react-icons/md';
import {MdWork} from 'react-icons/md';

import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
       <Navbar/>
       <div className="menu">
          <ul>
            <li><Link to="/"><AiOutlineHome color="#fff" size={30}/>Home</Link></li>
            <li><Link to="/anunciar"><AiFillNotification color="#fff" size={30}/>Anunciar</Link></li>
            <li><Link to="/sobre"><AiOutlineInfoCircle color="#fff" size={30}/>Sobre</Link></li>
          </ul>
       </div>
       <header>
        
         <div className="banner">
              <h3>Bem vindo!!</h3>
              <p><MdLocationOn/>Campo Maior PI</p>
              <div className="input">
                <input type="text"/>
                <FaSearch id="icon-search" color="#28a745"/>
              </div>
         </div>
       </header>
       <main>
        
         <br></br>
          <h3>Escolha uma categoria:</h3>
          <div className="itens">
            <div className="item">
              <Link>
                <FaHospitalAlt color="#28a745" size={60}/>
                <p>Hospitais</p>
              </Link>
              
            </div>
            <div className="item">
               <Link>
                 <FaHamburger color="#28a745" size={60}/>
                 <p>Lachonetes</p>
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
