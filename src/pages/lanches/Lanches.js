import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Lanches.css';
import Menu from '../../components/menu/Menu';

import  { FaTimes } from 'react-icons/fa'
function Lanches(){
    return(
        <>
            <Navbar/>
            <Menu/>
            
            <main>
              <h2>Disponível em breve... </h2>
              <FaTimes size={40}color="#F6A32D"/>
                
            </main>
        </>
    );
}
export default Lanches;