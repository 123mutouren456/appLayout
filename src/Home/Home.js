import React ,{Component} from 'react';
import { SearchBar, Icon, Flex} from 'antd-mobile';
import './home.scss';
import pic from './../images/default.jpg';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"美食"
        }
    }
    render(){
        return (
            <div className="home">
                <div className="home-header">
                    <div className="search clearfix">
                        <SearchBar
                            value={this.state.value}
                            placeholder="Search"
                            className="search-input fl"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                        // onChange={this.onChange}
                        />
                        <div className="fl icon-sec" style={{marginRight:10}}>
                            <Icon type="check-circle"  />
                        </div>
                        <div className="fl icon-sec">
                            <Icon type="plus"  />
                        </div>
                    </div>
                </div>
                <div className="home-content">
                    <Flex className="con">
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                    </Flex>
                    <Flex className="con">
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                    </Flex>
                    <Flex className="con">
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                    </Flex>
                    <Flex className="con">
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={pic} width="100%"  />
                            <p className="name">名称名称名称名称名称</p>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}