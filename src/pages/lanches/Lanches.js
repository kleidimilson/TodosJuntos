import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Lanches.css';
import imagem from '../../img/restaurante.jpg'

function Lanches(){
    return(
        <>
            <Navbar/>
            <div className="banner">
                <h2>Lanches</h2>
            </div>
            <main>
                <div className="cards">
                    <img  className="img-lanche" width="40%" src={imagem} alt=""/>
                    <div className="informacoes">
                        <h2>Tok Final</h2>
                    </div>
                </div>
              
            </main>
        </>
    );
}
export default Lanches;