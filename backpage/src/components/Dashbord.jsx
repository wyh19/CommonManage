/**
 * Created by 30113 on 2017/8/1.
 */
import React, {Component} from 'react';
import {Card,Row,Col,Icon} from 'antd';

class Dashbord extends Component{
    render(){
        return (<div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={<div><Icon type="file" style={{color:'#E7191B'}}/>待办事项</div>}extra={<a href="#">更多</a>}>
                        <div>

                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="今日新闻"extra={<a href="#">更多</a>}>
                        <div>

                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="今日新闻"extra={<a href="#">更多</a>}>
                        <div>

                        </div>
                    </Card>
                </Col>
            </Row>

        </div>);
    }
}
export default Dashbord;