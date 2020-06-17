import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Lanches.css';
import Menu from '../../components/menu/Menu';

import video from '../../img/video.mp4';
import  { FaTimes } from 'react-icons/fa'
function Lanches(){
    return(
        <>
            <Navbar/>
            <Menu/>
            <div className="banner">
              
               <video autoplay="autoplay" loop="loop" >
                    <source src={video}/>
               </video>
            </div>
            <main>
              <h2>Disponível em breve... </h2>
              <FaTimes size={40}color="#28A745"/>
                
            </main>
        </>
    );
}
export default Lanches;