import React,{  useEffect, useState}  from 'react';
import api from '../services/api';
import './Main.css';
import foto from '../img/mercado.jpg';
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"

function Mercados() {
  
  
  const [mercados, setMercados] = useState([]);
  
  useEffect(() => {
    async function loadPart(){
      const response = await api.get('/mercados');
      setMercados(response.data);
     
    }
    loadPart();

  },[]);

    
  return (
    <>
     <main>
      
      <div className="itens">
        {mercados.map(mercs => (
            <div className="cards">
              <img alt="" src={foto} />
              <div className="informacoes">
                <h3>{mercs.mercadoNome}</h3>
                <p><MdRoom/> {mercs.cidade}</p>
                <p><MdPermContactCalendar/> {mercs.contato}</p>
              </div>
              
            </div>              
          ))}
            
      </div>
     </main>
    </>
  );
}

export default Mercados;
