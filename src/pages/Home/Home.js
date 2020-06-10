import React  from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import {AiFillNotification} from 'react-icons/ai';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import './Home.css';
import hospital from '../../img/hospital.png'
import restaurante from '../../img/dish.png'
import loja from '../../img/gift.png';

function Home() {
  return (
    <>
       <nav className="nav-bar">
         <h3>Todos Juntos</h3>
       </nav>
       <div className="menu">
          <ul>
            <li><AiOutlineHome size={30}/>Home</li>
            <li><AiFillNotification size={30}/>Anuciar</li>
            <li><AiOutlineInfoCircle size={30}/>Sobre</li>
          </ul>
       </div>
       <header>
         <div>
           
         </div>
         <div className="banner">
            <h3>Bem vindo!!</h3>
            <p><MdLocationOn/>Campo Maior PI</p>
          
         </div>
       </header>
       <main>
          <div className="itens">

            
            <div className="item">
                <img src={hospital}/>
                <p>Hospitais</p>
            </div>
            <div className="item">
                <img src={restaurante}/>
                <p>Comida</p>
            </div>
            <div className="item">
                <img src={loja}/>
            </div>
            <div className="item">
                <img src={hospital}/>
            </div>
            <div className="item">
                <img src={hospital}/>
            </div>
            <div className="item">
                <img src={hospital}/>
            </div>
            <div className="item">
                <img src={hospital}/>
                
            </div>
            <div className="item">
                <img src={hospital}/>
            </div>
          </div>
       </main>

    </>
  );
}

export default Home;
