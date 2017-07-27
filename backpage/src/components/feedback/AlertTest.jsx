/**
 * Created by wyh on 2017/6/25.
 */
import React, {Component} from 'react';
import {Row, Col, Card, Alert, Modal, Button,message,Popconfirm,Popover,Tooltip } from 'antd';

const confirm = Modal.confirm;

function confirmHandle(){
    alert('确认删除');
}
function cancelHandle(){
    alert('取消删除');
}

class AlertTest extends Component {
    state = {
        visible: false,
    };
    onClose = (e) => {
        console.log(e);
    };
    handleOK = (e) => {
        var that = this;
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                that.setState({
                    visible:false,
                });
            },
        });
    };
    handleCancel = (e) => {
        this.setState({
            visible:false,
        });
    };
    showModal = () => {
        this.setState({
            visible:true,
        });
    };
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Alert 警告提示">
                            <Alert type="success" message="success message"/>
                            <Alert style={{marginTop: 10}} type="info" message="info message"
                                   description="info description description description"/>
                            <Alert style={{marginTop: 10}} type="info" closable message="info message"
                                   onClose={this.onClose}/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Modal 对话框">
                            <Button type="primary" onClick={this.showModal}>打开对话框</Button>
                            <Modal
                                title="基本对话框"
                                visible={this.state.visible}
                                maskClosable={false}
                                onOk={this.handleOK}
                                onCancel={this.handleCancel}
                            >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Alert 警告提示">
                            <Button type="primary" onClick={()=>{message.info('显示消息')}}>显示消息</Button>
                            <Tooltip placement="bottom" title="删除按钮">
                                <Popconfirm title="将要删除，是否继续？" onConfirm={confirmHandle} onCancel={cancelHandle}>
                                    <Button type="danger"  style={{marginLeft:10}}>删除</Button>
                                </Popconfirm>
                            </Tooltip >
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default AlertTest;