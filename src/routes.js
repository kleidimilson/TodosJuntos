import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Hospitais from './pages/hospitais';
import Padarias from './pages/padarias';
import Hoteis from './pages/hoteis';
import Restaurantes from './pages/restaurantes';
import Mercados from './pages/mercados';
import Anunciar from './pages/anunciar';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
               
                <Route path="/mercados"  component={Mercados}/>
                <Route path="/restaurantes"  component={Restaurantes}/>
                <Route path="/hoteis"  component={Hoteis}/>
                <Route path="/hospitais"  component={Hospitais}/>
                <Route path="/padarias"  component={Padarias}/>
                <Route path="/anunciar"  component={Anunciar}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


