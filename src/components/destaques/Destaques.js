import React,{  useEffect, useState}  from 'react';
import api from '../../services/api';

import foto from '../../img/hotel2.jpg';
import banner from '../../img/banner5.jpg';
import './Destaque.css'
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"

function Destaques() {
    const [destaques, setDestaque] = useState([]);
    
    useEffect(() => {
      async function loadPart(){
        const response = await api.get('/hoteis');
        setDestaque(response.data);
       
      }
      loadPart();
  
    },[]);
  
      
      
    return (
      <> 
        <main className="test">
            <h2>Mais populares</h2>
          <div className="itens">
            {destaques.map(destaque => (
                <div className="cards">
                  <img alt="" src={foto} />
                  <div className="informacoes">
                    <h3>{destaque.hotelNome}</h3>
                    <p><MdRoom/> {destaque.cidade}</p>
                    <p><MdPermContactCalendar/> {destaque.contato}</p>
                  </div>
                  
                </div>              
              ))}
          </div>
          <img className="banner" alt="" src={banner} />
       </main>
  
  
      </>
    );
  }
  
  export default Destaques;
  