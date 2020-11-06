import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/menu/Menu';

import api from '../../services/api';

const Detalhes = (props) => {
 
    const [itens, setItens] = useState([]);
  
    let tipo = props.match.params.tipo;
    let nome = props.match.params.nome;
  
    useEffect(() => {
     
      async function handleAddDev() {
        
        
        const response = await api.get(`/${tipo}/detalhes/${nome}`);
        setItens([response.data]);
        
         
      }
      handleAddDev();
    
    })
  return(
    <>
        
        <Navbar/>
       

        {itens.map(item => (
          <>    
               <img width="50%" height="50%" src={item.link}/>
          </>
         
        ))}
        <Menu/>
    </>
  )
}

export default Detalhes;