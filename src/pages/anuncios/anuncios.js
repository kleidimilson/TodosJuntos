import React, {useState,useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './anuncios.css';
import Menu from '../../components/menu/Menu';
import {FaWhatsapp} from 'react-icons/fa';
import {RiInformationLine} from 'react-icons/ri';


import api from '../../services/api';
const Anuncios = (props) => {
    const [itens, setItens ] = useState([]);
    let tipo = props.match.params.tipo;

    
     

    console.log(tipo)

    useEffect(() => {
      
        async function loadItens(){
        
            const response = await api.get(`/${tipo}`);
            
            setItens(response.data);
            console.log(response.data);
        }

            loadItens();

    });
    return(
        <>
            <Navbar/>
            <Menu/>
            
            <main>
              
                <div className="header">

                    {tipo}
                </div>
           
                <ul>

              
                    {itens.map(item => (
                        <div className="cards">
                            <img src={item.link} alt="imagem" width="100px"/>
                        
                            <div className="cards-description">
                                <h2>{item.nome}</h2>
                                <p id="cidade">{item.cidade}</p>
                                <p>{item.contato}</p>
                                <p>{item.endereço}</p>
                                <div className="links">
                                     <a id="btn-wpp" href={`https://api.whatsapp.com/send?phone=${item.contato}&text=Olá${item.nome}%20vim%20pelo%20todos%20juntos`}>WhatsApp<FaWhatsapp id="icon-wpp" size={12}/></a>
                                     <a id="btn-info" href="https://todosjuntos.netlify.app/anuncios/lanches">Ler mais<RiInformationLine id="icon-wpp" size={12}/></a>
                                </div>
                                
                                
                        
                            </div>
                            
                        </div>
                    ))}
                </ul>
             
                
            </main>
        </>
    );
}
export default Anuncios;