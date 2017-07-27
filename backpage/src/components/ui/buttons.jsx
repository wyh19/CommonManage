/**
 * Created by wyh on 2017/6/22.
 */
import React, {Component} from 'react';
import {Button, Card, Menu, Dropdown, Icon} from 'antd';

function handleMenuClick(e) {
    console.log(e);
}
const dMenu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">key1</Menu.Item>
        <Menu.Item key="2">key2</Menu.Item>
        <Menu.Item key="3">key3</Menu.Item>
    </Menu>
);

class Buttons extends Component {
    state = {
        loading: false,
        iconLoading: false,
    };
    onClick = () => {
        this.setState({
            loading: !this.state.loading
        });
        window.setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    };

    render() {
        return (
            <div>
                <Card title="普通按钮" style={{float: 'left', width: 400, margin: 10}}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>

                <Card title="图标按钮" style={{float: 'left', width: 400, margin: 10}}>
                    <Button type="primary" shape="circle" icon="search"/>
                    <Button icon="search">Default</Button>
                    <Button type="primary" loading>loading</Button>
                    <Button loading={this.state.loading} icon="poweroff" onClick={this.onClick}>click</Button>
                </Card>
                <Card title="下拉按钮" style={{float: 'left', width: 400, margin: 10}}>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={dMenu}>
                        <Button>
                            more <Icon  type="down"/>
                        </Button>

                    </Dropdown>
                </Card>

                <style>
                    {
                        `
                        .ant-btn{
                            margin:5px;
                        }
                      `
                    }
                </style>
            </div>
        );
    }
}

export default Buttons;