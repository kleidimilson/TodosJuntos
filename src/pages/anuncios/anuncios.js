import React, {useState,useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './anuncios.css';
import Menu from '../../components/menu/Menu';


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
              
           
           
            
                {itens.map(item => (
                 
                 <ul>
                     <div className="cards">
                        <img src={item.link} alt="imagem" width="100px"/>
                       
                        <div className="cards-description">
                            <h2>{item.nome}</h2>
                            <p id="cidade">{item.cidade}</p>
                            <p>{item.contato}</p>
                            <p>{item.endereço}</p>
                           
                       
                        </div>
                        
                     </div>
                     
                 </ul>
              ))}
             
                
            </main>
        </>
    );
}
export default Anuncios;