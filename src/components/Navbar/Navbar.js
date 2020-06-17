import React from 'react';
import {FaHandsHelping, FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

import {FaSearch } from  'react-icons/fa';
import './Navbar.css';
function Navbar (){
    return(
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <FaHandsHelping  size={30}/>  
                    <h3>Todos Juntos</h3>
                </div>
                <div>
                    <FaInstagram className="social-icon" size={25}/>
                    <FaFacebook className="social-icon" size={25}/>
                </div>
               
            </nav>
        </>
    )
}
export default Navbar;