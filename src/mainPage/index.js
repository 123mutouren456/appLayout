import React ,{Component} from 'react';
import './mainPage.scss';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
import pic from './../images/default.jpg';

export default class MainPage extends Component{
    constructor(props){
        super(props);

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
            <div className="main-page">
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
                <div className="main-con">
                    <div className="classify">
                        <div>
                            <p className="icons"></p>
                            <span>汽车服务</span>
                        </div>
                        <div>
                            <p className="icons bg-bl"></p>
                            <span>丽人按摩</span>
                        </div>
                        <div>
                            <p className="icons bg-gn"></p>
                            <span>搬家货运</span>
                        </div>
                        <div>
                            <p className="icons bg-rose"></p>
                            <span>保姆月嫂</span>
                        </div>
                        <div>
                            <p className="icons bg-yl"></p>
                            <span>安装维修</span>
                        </div>
                        <div>
                            <p className="icons bg-purple"></p>
                            <span>洗衣修鞋</span>
                        </div>
                        <div>
                            <p className="icons bg-light-blue"></p>
                            <span>开锁换锁</span>
                        </div>
                        <div>
                            <p className="icons bg-red"></p>
                            <span>全部服务</span>
                        </div>
                    </div>

                    <div className="service">
                        <p className="title">
                            常见服务<span>COMMON SERVICES</span>
                        </p>
                        <div className="box box1">
                            <div className="item"><div></div></div>
                            <div className="item"><div></div></div>
                        </div>
                        <div className="box box2">
                            <div className="item"><div></div></div>
                            <div className="item"><div></div></div>
                            <div className="item"><div></div></div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}