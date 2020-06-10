import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Anunciar from './pages/anunciar/Anunciar';
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/anunciar" component={Anunciar}/>
              
           
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


