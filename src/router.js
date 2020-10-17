import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Users from './pages/users';

function Routes() {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/users" component = {Users}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;