import React,{  useEffect, useState}  from 'react';
import api from '../services/api';
import './Main.css';
import foto from '../img/restaurante.jpg';
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"

function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);
  
  useEffect(() => {
    async function loadPart(){
      const response = await api.get('/restaurantes');
      setRestaurantes(response.data);
     
    }
    loadPart();

  },[]);

    
  return (
    <>
     
 
   
    
     <main>
      
      <div className="itens">
        {restaurantes.map(restau => (
            <div className="cards">
              <img alt="" src={foto} />
              <div className="informacoes">
                <h3>{restau.restauranteNome}</h3>
                <p><MdRoom/> {restau.cidade}</p>
                <p><MdPermContactCalendar/> {restau.contato}</p>
              </div>
              
            </div>              
          ))}
      </div>
     </main>
    </>
  );
}

    

export default Restaurantes;
