import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Sessions } from '../components';
import Header from './Header';
import Footer from './Footer';

const Main = () => (
    // <div>
    <div id="wrap">
    <Header />
    <Switch>
        <Route exact path="/" component={Sessions} />
        <Route path="/login" component={Login} />
        <Route path="/sessions" component={Sessions} />
    </Switch>
    <Footer />
    </div>
)

export default Main;