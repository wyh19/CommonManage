/**
 * Created by wyh on 2017/6/24.
 */
import React, {Component} from 'react';
import {Row, Col, Card, Input, InputNumber} from 'antd';

const Search = Input.Search;

class InputTest extends Component {
    render() {
        return (
            <div>
                <Row gutter={16} type="flex" justify="center" align="top">
                    <Col span={12}>
                        <Card title="基本使用">
                            <Input placeholder="Basic usage"/>
                            <Search
                                placeholder="请输入关键字"
                                style={{width:200,margin:'10px 0'}}
                                onSearch={value=>alert(value)}
                            >
                            </Search>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="大小">
                            <div className="example-input">
                                <Input placeholder="large" size="large"/>
                                <Input placeholder="default" size="default"/>
                                <Input placeholder="small" size="small"/>
                            </div>
                            <style>
                                {
                                    `
                                    .example-input .ant-input{
                                        width: 200px;
                                        margin: 8px;
                                    }
                                 `
                                }
                            </style>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="left" align="top" style={{marginTop:10}}>
                    <Col span={12}>
                        <Card title="数字">
                            <div  className="example-input">
                                <InputNumber min={1} max={10} defaultValue={3} onChange={(v)=>console.log(v)}/>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InputTest;