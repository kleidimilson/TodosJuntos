import React,{  useEffect, useState}  from 'react';
import api from '../services/api';
import './Main.css';
import foto from '../img/foto.jpg';
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"


function Home() {
  const [hoteis, setHoteis] = useState([]);
  
  useEffect(() => {
    async function loadPart(){
      const response = await api.get('/hoteis');
      setHoteis(response.data);
     
    }
    loadPart();

  },[]);

    
    
  return (
    <>
      <main>
        
        <div className="itens">
          {hoteis.map(hotel  => (
              <div className="cards">
                <img alt="" src={foto} />
                <div className="informacoes">
                  <h3>{hotel.hotelNome}</h3>
                  <p><MdRoom/> {hotel.cidade}</p>
                  <p><MdPermContactCalendar/> {hotel.contato}</p>
                </div>
                
              </div>              
            ))}
        </div>
     </main>


    </>
  );
}

export default Home;
