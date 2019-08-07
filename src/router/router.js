import React from 'react';
import {Route, Switch,Redirect } from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../Home/Home';
import NotFound from 'bundle-loader?lazy&name=notFound!../NotFound/NotFound';
import Weather from 'bundle-loader?lazy&name=weather!../weather_react/Weather';
import MainPage from 'bundle-loader?lazy&name=weatherRedux!../mainPage/';
import Mine from 'bundle-loader?lazy&name=Todos!../Mine/';
import Cover from 'bundle-loader?lazy&name=Cover!../cover/cover';
import Canvas from 'bundle-loader?lazy&name=Cover!../canvas/';

const createComponent = (component) => (props) =>{
    return (
        <Bundle load={component}>
            {
                (Component) => {
                   return  Component ? <Component {...props} />: null
                }
            }
        </Bundle>
    )
}

export default ()=>(
    <div>
        <Switch>
            <Route path="/home" component = {createComponent(Home)} />
            <Route path="/weather" component = {createComponent(Weather)} />
            <Route path="/mainPage" component = {createComponent(MainPage)} />
            <Route path="/mine" component = {createComponent(Mine)} />
            <Route path="/cover" component = {createComponent(Cover)} />
            <Route path="/canvas" component = {createComponent(Canvas)} />
            <Redirect to="/home" />
        </Switch>
    </div>
);