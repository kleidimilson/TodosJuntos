import React from 'react';
import {Link} from 'react-router-dom'
import './Sobre.css'
import Navbar from '../../components/Navbar/Navbar';
import {FaLongArrowAltLeft} from 'react-icons/fa';

function Sobre(){
    return(
        <>
            <Navbar/>
            <Link to="/"><FaLongArrowAltLeft id="btn-voltar" size={27} color="#fff"/></Link>
            <main>
                <br></br>
                
                
            </main>
           
        </>
    )
}
export default Sobre;