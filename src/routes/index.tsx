import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route component={NotFound}  />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;