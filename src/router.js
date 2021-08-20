import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch,Link } from "react-router";
// import { Router, Route, Switch,Link } from "react-router";
import { BrowserRouter, Route,Switch,Link } from 'react-router-dom';
import Gender from './gender';
import Home from './home';
import Hostel from './hostel';
import Floor from './floors';
import Final from './final'
function Routes()
{
return (
    <BrowserRouter>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/gender' component={Gender} /> 
              <Route path='/hostel' component={Hostel} />
              <Route path='/floors' component={Floor} />
              <Route path='/final' component={Final} />
          </Switch>
        </div>
      </BrowserRouter>
    );

}
export default Routes;