import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import './App.css';
import {Link} from 'react-router';

const {SubMenu} = Menu;
const {Header, Sider, Content, Footer} = Layout;

class App extends Component {
    state = {
        collapsed: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/app/ui/buttons']}>
                        <SubMenu
                            key="/app/ui"
                            title={<span><Icon type="scan"/><span className="nav-text">UI</span></span>}
                        >
                            <Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>
                            <Menu.Item key="/app/ui/grids"><Link to={'/app/ui/grids'}>栅格</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="/app/form"
                            title={<span><Icon type="scan"/><span className="nav-text">Form</span></span>}
                        >
                            <Menu.Item key="/app/form/inputtest"><Link
                                to={'/app/form/inputtest'}>Input</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="/app/feedback"
                            title={<span><Icon type="scan"/><span className="nav-text">Feedback</span></span>}
                        >
                            <Menu.Item key="/app/feedback/alerttest"><Link
                                to={'/app/feedback/alerttest'}>Alert</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: '0 10px'}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;

