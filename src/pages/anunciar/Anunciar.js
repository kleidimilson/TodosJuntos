import React from 'react';

import './Anunciar.css'
import Navbar from '../../components/Navbar/Navbar';

import Menu from '../../components/menu/Menu';

function Anunciar (){
    return(
        <>
            <Navbar/>
            <Menu/>
            
            <main>
                <br></br>
                 
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfv8bVz0MkNT7yFxQyjp_ZJDpTsfYaUeuW30zr9EvOqRnHyxw/viewform?embedded=true" title="formulario" width="90%" height="1000px" frameborder="0" marginheight="0" marginwidth="90"></iframe>
                
            </main>
           
        </>
    )
}
export default Anunciar;