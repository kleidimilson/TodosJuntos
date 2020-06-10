import React from 'react';
import {Link} from 'react-router-dom'
import './Anunciar.css'
import Navbar from '../../components/Navbar/Navbar';
import {FaLongArrowAltLeft} from 'react-icons/fa';
function Anunciar (){
    return(
        <>
            <Navbar/>
            <Link to="/"><FaLongArrowAltLeft id="btn-voltar" size={27} color="#fff"/></Link>
            <main>
                <br></br>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfv8bVz0MkNT7yFxQyjp_ZJDpTsfYaUeuW30zr9EvOqRnHyxw/viewform?embedded=true" title="formulario" width="90%" height="1000px" frameborder="0" marginheight="0" marginwidth="90">Carregando…</iframe>
            </main>
           
        </>
    )
}
export default Anunciar;