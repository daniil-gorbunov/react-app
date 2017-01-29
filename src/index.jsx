import React from 'react';
import {render} from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'

// import auth from './auth';
import './index.css';

import App from './components/App';
import Article from './components/Article';
import Articles from './components/Articles';
import Authors from './components/Authors';
import Login from './components/Login';

// function requireAuth(nextState, replace) {
//
//     if (!auth.isLoggedIn()) {
//         replace({
//             pathname: '/login',
//             state: {nextPathname: '/tasks'}
//         })
//     }
// }

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login}/>
            <Route path="articles" component={Articles}/>
            <Route path="authors" component={Authors}/>
            <Route path="article/:id" component={Article}/>
        </Route>
    </Router>
), document.getElementById('root'));
