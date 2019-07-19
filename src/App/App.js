import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import getRouter from './../router/router';
import './base.css';
import 'antd-mobile/dist/antd-mobile.css';
import './app.scss';

export default class App extends Component{
    render(){
        return (
            <div className="flex-container">
                <Nav />
                {getRouter()}
            </div>
        )
    }
}