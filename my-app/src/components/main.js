import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
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