/**
 * Created by 30113 on 2017/7/28.
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, message, Spin} from 'antd';
import {signup} from '../../axios/logins';

const FormItem = Form.Item;


class Signup extends React.Component {
    state = {loading: false};
    handleSubmit = (e) => {
        this.setState({loading: true});
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <Spin spinning={this.state.loading}>
                    <div className="login-form">
                        <div className="login-logo">
                            <span>登录</span>
                        </div>
                        <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                            <FormItem>
                                {getFieldDecorator('name', {
                                    rules: [{required: true, message: '请输入用户名!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                           placeholder="密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        style={{width: '100%'}}>
                                    登录
                                </Button>
                                或 <a href="#/signup">现在就去注册!</a>
                            </FormItem>
                        </Form>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default Form.create()(Signup);