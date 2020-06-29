import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Landing_Page';
import AboutMe from './aboutme';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/home" component={ Home } />
            <Route path='/aboutme' component={ AboutMe } />
        </Switch>
    )
}

export default Main;