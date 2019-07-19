import React from 'react';
import './style.scss';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
import pic from './../images/default.jpg';
class Weather extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {

        }
    }   
    componentDidMount(){
        this.lunbo =new Swiper('#swiper', {
            loop: true,
            autoplay: true,
            speed:1000,
            pagination: {
                el: '.swiper-pagination'
            }
          });
    }

    render(){
        return (
            <div className="page1">
                {/* <div className="page-header"></div> */}
                <div className="lunbo">
                    <div className="swiper-container" id="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={pic} width="100%" />
                            </div>
                            <div className="swiper-slide">
                                <img src={pic} width="100%" />
                            </div>
                            <div className="swiper-slide">
                                <img src={pic} width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="page-con">
                    <div className="search">
                        <input type="text" placeholder="搜索目的地 攻略 景点 酒店等" />
                    </div>
                    <div className="classify clear-fix">
                        <ul>
                            <li>
                                <p className="bounds"></p>
                                <p>找攻略</p>
                            </li>
                            <li>
                                <p className="bounds yl"></p>
                                <p>看游记</p>
                            </li>
                            <li>
                                <p className="bounds bl"></p>
                                <p>订酒店</p>
                            </li>
                            <li>
                                <p className="bounds sbl"></p>
                                <p>问达人</p>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="detail-con">
                        <div className="title">
                            <h3 className="tit">最适合11月旅行的目的地</h3>
                            <p className="sub-tit">初冬的时光</p>    
                        </div>
                        <ul className="clear-fix"> 
                            <li>
                                <img src={pic}  width="80%" className="img" />
                                <h4>丽江</h4>
                                <p>谁偷走了谁的时光</p>
                            </li>
                            <li>
                                <img src={pic}  width="80%" className="img" />
                                <h4>曼谷</h4>
                                <p>每天都有惊喜</p>
                            </li>
                            <li>
                                <img src={pic}  width="80%" className="img" />
                                <h4>成都</h4>
                                <p>做一个幸福的吃货</p>
                            </li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Weather;