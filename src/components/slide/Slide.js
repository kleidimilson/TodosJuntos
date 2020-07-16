import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';
import banner4 from '../../img/banner4.jpg';
import banner5 from '../../img/banner5.jpg';



const Slide = () => {
    const slideImagens = [
        `${banner1}`,
        `${banner2}`,
        `${banner3}`,
        `${banner4}`,
        `${banner5}`
    ]
    return(  
      <>
        <Slide id="banner">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[0]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[1]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[2]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[3]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImagens[4]})`, 'height': `70%`, 'display': 'flex', 'alignContent':'center', 'justifyContent': 'center', 'padding': 50, 'backgroundSize': 'cover'}}>
        
            </div>
          </div>
         
        </Slide>
     </>
        );
    
}
 
export default Slide;