import React ,{Component} from 'react';
import './mine.scss';
import pic from './../images/default.jpg';

export default class Mine extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="mine">
                <div className="header">
                    <p className="tit">
                        我的
                        <span className="setting">set</span>
                    </p>
                    <div className="person">
                        <img src={pic} width="64" className="img" />
                        <div className="info">
                            <h3>小竹筏</h3>
                            <p>会员积分：158</p>
                        </div>
                    </div>
                </div>
                <div className="collect">
                    <div>
                        <p>收藏</p>
                        <span>9</span>    
                    </div>
                    <div>
                        <p>关注</p>
                        <span>18</span>    
                    </div>
                    <div>
                        <p>足迹</p>
                        <span>125</span>    
                    </div>
                </div>

                <div className="order">
                    <div className="tit">
                        <h4>我的订单</h4>
                        <span>查看更多&gt;</span> 
                    </div>
                    <div className="cate">
                        <div>
                            <img src={pic} width="30%"/>
                            <span>待付款</span>
                        </div>
                        <div>
                            <img src={pic} width="30%"/>
                            <span>待发货</span>
                        </div>
                        <div>
                            <img src={pic} width="30%"/>
                            <span>待收货</span>
                        </div>
                        <div>
                            <img src={pic} width="30%"/>
                            <span>待评价</span>
                        </div>
                        <div>
                            <img src={pic} width="30%"/>
                            <span>售后/退款</span>
                        </div>
                    </div>
                </div>

                <div className="box" style={{marginBottom:10}}>
                    <p><span className="icons"></span>收货地址</p>
                    <span>更改收货地址&gt;</span>
                </div>
                <div className="box border">
                    <p><span className="icons"></span>余额</p>
                    <span>&gt;</span>
                </div>
                <div className="box border">
                    <p><span className="icons"></span>我的钱包</p>
                    <span>&gt;</span>
                </div>
                <div className="box" style={{marginBottom:10}}>
                    <p><span className="icons"></span>优惠券</p>
                    <span>&gt;</span>
                </div>

                <div className="box border">
                    <p><span className="icons"></span>客服中心</p>
                    <span>&gt;</span>
                </div>
                <div className="box" style={{marginBottom:10}}>
                    <p><span className="icons"></span>会员中心</p>
                    <span>&gt;</span>
                </div>


            </div>
        )
    }

}