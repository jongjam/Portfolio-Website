import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Landing_Page';
import About_Me from './About_Me';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/home" component={ Home } />
            <Route path='/about' component={ About_Me } />
        </Switch>
    )
}

export default Main;