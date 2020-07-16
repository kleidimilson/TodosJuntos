import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome,AiFillNotification, AiOutlineInfoCircle} from 'react-icons/ai';
import './Menu.css';
function Menu (){
    return(
        <>
         <div className="menu">
          <ul>
            <li><Link to="/"><AiOutlineHome color="#f6a32d" size={30}/>Home</Link></li>
            <li><Link to="/anunciar"><AiFillNotification color="#f6a32d" size={30}/>Anunciar</Link></li>
            <li><Link to="/sobre"><AiOutlineInfoCircle color="#f6a32d" size={30}/>Sobre</Link></li>
          </ul>
       </div>
        </>
    )
}

export default Menu;