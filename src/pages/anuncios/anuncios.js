import React, {useState,useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './anuncios.css';
import Menu from '../../components/menu/Menu';
import {FaWhatsapp} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {MdClose} from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';
import {AiFillStar} from 'react-icons/ai';
import api from '../../services/api';
const Anuncios = (props) => {
    const [itens, setItens ] = useState([]);
    let tipo = props.match.params.tipo;

    
     


    useEffect(() => {
      
        async function loadItens(){
        
            const response = await api.get(`/${tipo}`);
            
            setItens(response.data);
           
        }

            loadItens();

    });
    return(
        <>
            <Navbar/>
            <Menu/>
            <div className="header">
                {tipo}
            </div>  
            <main>
                <ul>
                    {  
                            itens.length === 0?(
                                <div className="not-itens">
                                     Disponivel em breve <MdClose/>
                                </div>
                                    
                                ):
                                (
                                    itens.map(item => (
                          
                                
                            
                                        <div className="cards">
                                     
                                     
                                        <img src={item.link} alt="imagem" width="100px"/>
                                        
                                        <div className="cards-description">
                                            <h2>{item.nome}</h2>
                                            <p id="cidade"><MdLocationOn/>{item.cidade}</p>
                                            <p><AiFillStar color="#c4bc21"/><AiFillStar color="#c4bc21"/><AiFillStar color="#c4bc21"/><AiFillStar color="#c4bc21"/><AiFillStar color="#c4bc21"/><AiFillStar color="#c4bc21"/></p>
                                            <p><IoMdTime/> Segunda a Domingo</p>
                                            <div className="links">
                                                 <a id="btn-wpp" href={`https://api.whatsapp.com/send?phone=${item.contato}&text=Olá${item.nome}%20vim%20pelo%20todos%20juntos`}>WhatsApp<FaWhatsapp id="icon-wpp" size={12}/></a>
                                                
                                            </div>
                                            
                                            
                                    
                                        </div>
                                        
                                    </div>
                                 
                                ))
                            )
                    }
                </ul>
             
                
            </main>
        </>
    );
}
export default Anuncios;