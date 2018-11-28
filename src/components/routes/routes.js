import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Root from '../root/Root';
import Singup from '../sing-up/sing-up';
import Login from '../log-in/log-in';

export default function Routes() {
  return (    
      <Router>
        <Switch>
          <Route path="/singin" component={Singup} />
          <Route path="/singup" component={Login} />
          <Route path="/" component={Root} />
        </Switch>
      </Router>   
  );
};





