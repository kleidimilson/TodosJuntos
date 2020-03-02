import React from "react";
import { Slide } from 'react-slideshow-image';
import foto1 from '../../img/banner1.jpg';
import foto2 from '../../img/banner2.jpg';
import foto3 from '../../img/banner3.jpg';
import './Slide.css';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
  
const Slideshow = () => {
    
    return(
       <div className="containerSlide">
           <Slide {...properties}>
               <div className="each-slide">
                  <div>
                      <img src={foto1} alt="."/> 
                  </div>
               </div>
               <div className="each-slide">
                  <div>
                      <img src={foto2} alt="."/> 
                  </div>
               </div>
               <div className="each-slide">
                  <div>
                      <img src={foto3} alt=","/> 
                  </div>
               </div>
           </Slide>
       </div>
    )
}
export default Slideshow;