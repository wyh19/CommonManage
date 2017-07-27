/**
 * Created by wyh on 2017/6/24.
 */
import React,{Component} from 'react';
import {Row,Col} from 'antd';

class Grids extends Component{
    render(){
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <div>COL-6</div>
                    </Col>
                    <Col span={6}>
                        <div>COL-6</div>
                    </Col>
                    <Col span={6}>
                        <div>COL-6</div>
                    </Col>
                    <Col span={6}>
                        <div>COL-6</div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Grids;

