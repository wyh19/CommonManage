import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

//index文件主要处理路由
//app文件主要处理layout


const  routes =
    <Route path={"/"} components={}>

    </Route>

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.getElementById('root'));


registerServiceWorker();
