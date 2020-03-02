import React from 'react';
import './index.css';
import './global.css';
import Sidebar from './components/sidebar/Sidebar'; 
import Slideshow from './components/slide/Slide';
import Routes from './routes';

import Destaques from  './components/destaques/Destaques'

import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Slideshow/>
      <Destaques/>
      <Routes/> 
      <Footer/>
       
    </div>
  );
}

export default App;
