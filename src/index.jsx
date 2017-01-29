import React from 'react';
import {render} from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'
import App from './App';
import Login from './Login';
import Tasks from './Tasks';
import auth from './auth';
import './index.css';

function requireAuth(nextState, replace) {

    if (!auth.isLoggedIn()) {
        replace({
            pathname: '/login',
            state: {nextPathname: '/tasks'}
        })
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={requireAuth}>
            <Route path="login" component={Login}/>
            <Route path="tasks" component={Tasks}/>
        </Route>
    </Router>
), document.getElementById('root'));
