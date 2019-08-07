import React ,{Component} from 'react';
import Flex from 'antd-mobile/lib/flex';
import InputItem from 'antd-mobile/lib/input-item';
import TextareaItem  from 'antd-mobile/lib/textarea-item';
import Picker  from 'antd-mobile/lib/picker';
import List from 'antd-mobile/lib/list';
import { createForm } from 'rc-form';
import './index.scss';


const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
class Cover extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    label: '河北',
                    value: '河北',
                    children: [
                        {
                            label: '保定',
                            value: '保定'
                        }
                    ]
                  },
                  {
                    label: '河南',
                    value: '河南',
                  }
            ],
            cols: 2
        }
    }



    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div className="flex-container1">
                <List renderHeader={() => '提问'}>
                    <InputItem
                        {...getFieldProps('autofocus')}
                        clear
                        placeholder="auto focus"
                        
                    >标题</InputItem>
                    <TextareaItem
                        title="正文"
                        rows = {3}
                        placeholder="auto focus in Alipay client"
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                    />
                    <Picker
                        data={this.state.data}
                        cols={this.state.cols}
                        value={this.state.asyncValue}
                        //onPickerChange={this.onPickerChange}
                        onOk={v => console.log(v)}
                        >
                        <List.Item arrow="horizontal" onClick={this.onClick}>所属版块</List.Item>
                    </Picker>
                    <Picker
                        data={this.state.data}
                        cols={this.state.cols}
                        value={this.state.asyncValue}
                        //onPickerChange={this.onPickerChange}
                        onOk={v => console.log(v)}
                        >
                        <List.Item arrow="horizontal" onClick={this.onClick}>邀请回答</List.Item>
                    </Picker>

                </List>
               
            </div>
        )
    }
}

export default createForm()(Cover);