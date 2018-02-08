import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Sessions } from '../components';
import Header from '../containers/Header';

const Main = () => (
    <div>
    <Header />
    <Switch>
        <Route exact path="/" component={Sessions} />
        <Route path="/login" component={Login} />
        <Route path="/sessions" component={Sessions} />
    </Switch>
    </div>
)

export default Main;