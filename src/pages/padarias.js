import React,{  useEffect, useState}  from 'react';
import api from '../services/api';
import './Main.css';
import foto from '../img/padaria.jpg';
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"

function Padarias() {
  const [padarias, setPadarias] = useState([]);
  
  useEffect(() => {
    async function loadPart(){
      const response = await api.get('/padarias');
      setPadarias(response.data);
     
    }
    loadPart();

  },[]);

    

    
  return (
    <>
       <main>
      
      <div className="itens">
        {padarias.map(pada => (
            <div className="cards">
              <img alt="" src={foto} />
              <div className="informacoes">
                <h3>{pada.padariaNome}</h3>
                <p><MdRoom/> {pada.cidade}</p>
                <p><MdPermContactCalendar/> {pada.contato}</p>
              </div>
              
            </div>              
          ))}
      </div>
     </main>

    </>
  );
}

export default Padarias;
