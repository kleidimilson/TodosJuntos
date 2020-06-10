import React from 'react';
import './index.css';
import './global.css';

import Rotas from './routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <> 
      <Router>
         <Rotas />
       </Router>
   </>
  );
}

export default App;
