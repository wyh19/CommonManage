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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/app/dashbord']}>
                        <Menu.Item key="/app/dashbord">
                            <Link to={'/app/dashbord'}>
                                <Icon type="desktop"/>
                                <span className="nav-text">我的工作台</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="/app/base"
                            title={<span><Icon type="home"/><span className="nav-text">基础信息</span></span>}
                        >
                            <Menu.Item key="/app/base/user"><Link to={'/app/base/user'}><Icon type="user"/>用户管理</Link></Menu.Item>
                            <Menu.Item key="/app/base/role"><Link to={'/app/base/role'}><Icon type="skin"/>角色管理</Link></Menu.Item>
                        </SubMenu>
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

