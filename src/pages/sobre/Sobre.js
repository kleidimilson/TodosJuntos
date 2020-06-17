import React from 'react';
import {Link} from 'react-router-dom'
import './Sobre.css'
import Navbar from '../../components/Navbar/Navbar';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import imagem from '../../img/finance.svg'

function Sobre(){
    return(
        <>
            <Navbar/>
            <Link to="/"><FaLongArrowAltLeft id="btn-voltar" size={27} color="#fff"/></Link>
            <main>
                <div className="sobre">
                    <img width='60%' src={imagem} alt="sobre"/>
                    <br></br>
                    <h2>Sobre nós</h2>
                    <p>A iniciativa Todos Juntos é um projeto, que busca aproximar os consumidores dos pequenos produtores rurais, comerciantes e prestadores de serviço, especialmente durante o período de isolamento social imposto pela Covid-19. Isso é feito por meio de ferramentas digitais, sem nenhum custo para consumidores e fornecedores cadastrados.

                        Desenvolvido pelo estudante de Ciência da Computação da Universidade Estadual do Piauí Kleidimilson. Juntos, pretendendo gerar aprendizado e ao mesmo tempo, melhorar a economia de Campo Maior e da região.</p>
                </div>
                
                
                
                
            </main>
           
        </>
    )
}
export default Sobre;