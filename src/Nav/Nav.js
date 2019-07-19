import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';
import Flex from 'antd-mobile/lib/flex';
import './nav.scss';

export default class Nav extends Component{
    render(){
        
        return (
            <Flex className="nav">
                <Flex.Item><NavLink  activeClassName="active" to="/home">首页</NavLink ></Flex.Item>
                <Flex.Item><NavLink  activeClassName="active" to="/weather" >天气</NavLink ></Flex.Item>
                <Flex.Item><NavLink activeClassName="active" to="/mainPage" >主页</NavLink ></Flex.Item>
                <Flex.Item><NavLink activeClassName="active" to="/mine" >我的</NavLink ></Flex.Item>
            </Flex>
        )
    }
}