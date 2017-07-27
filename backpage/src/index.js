import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Page from './components/Page';
import App from './App';
import './index.css';

import Buttons from './components/ui/buttons';
import Grids from './components/ui/grids';
import InputTest from './components/form/InputTest';
import AlertTest from './components/feedback/AlertTest';

var routes =
<Route path={'/'} components={Page}>
    <IndexRedirect to="/app/ui/buttons" />
    <Route path={'app'} component={App}>
    <Route path={'ui'}>
    <Route path={'buttons'} component = {Buttons}/>
    <Route path={'grids'} component = {Grids}/>
    </Route>
    <Route path={'form'}>
    <Route path={'inputtest'} component = {InputTest}/>
    </Route>
    <Route path={'feedback'}>
    <Route path={'alerttest'} component = {AlertTest}/>
    </Route>
    </Route>
    </Route>

    ReactDOM.render(
    <Router history={hashHistory}>
    {routes}
    </Router>,
    document.getElementById('root'));

