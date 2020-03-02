import React,{  useEffect, useState}  from 'react';
import api from '../services/api';
import './Main.css';
import foto from '../img/hospital.jpg';
import { MdRoom } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md"



function Hospitais() {

  const [hospitais, setHospitais] = useState([]);
  
  useEffect(() => {
    async function loadPart(){
      const response = await api.get('/hospitais');
      setHospitais(response.data);
     
    }
    loadPart();

  },[]);
  return (
    <>
       <main>
        
        <div className="itens">
          {hospitais.map(hosp => (
              <div className="cards">
                <img alt="" src={foto} />
                <div className="informacoes">
                  <h3>{hosp.hospitalNome}</h3>
                  <p><MdRoom/> {hosp.cidade}</p>
                  <p><MdPermContactCalendar/>{hosp.contato}</p>
                </div>
                
              </div>              
            ))}
        </div>
     </main>

    </>
  );
}

export default Hospitais;
