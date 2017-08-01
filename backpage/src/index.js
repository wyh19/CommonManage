import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Page from './components/Page';
import App from './App';
import './index.css';
import './style/index.less';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

import Dashbord from './components/Dashbord';
import User from './components/app/base/User';
import Role from './components/app/base/Role';

var routes =
    <Route path={'/'} components={Page}>
        <IndexRedirect to="/login"/>
        <Route path={'app'} component={App}>
            <Route path={'dashbord'} component={Dashbord}/>
            <Route path={'base'}>
                <Route path={'user'} component={User}/>
                <Route path={'role'} component={Role}/>
            </Route>
        </Route>
        <Route path={'login'} components={Login}/>
        <Route path={'signup'} components={Signup}/>
    </Route>

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.getElementById('root'));

