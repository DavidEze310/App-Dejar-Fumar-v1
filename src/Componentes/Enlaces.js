import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from '../Paginas/Inicio';
import Tuprogreso from '../Paginas/Tuprogreso'
import NotFound from '../Paginas/NotFound'


function Enlaces (){
    return(
        <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Inicio}/>
               <Route exact path="/Tuprogreso"component={Tuprogreso}/>
               <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Enlaces