import React from 'react';
import {FaHandsHelping} from 'react-icons/fa';
import './Navbar.css';
function Navbar (){
    return(
        <>
            <nav className="nav-bar">
                <FaHandsHelping  size={30}/>  <h3>Todos Juntos</h3>
            </nav>
        </>
    )
}
export default Navbar;