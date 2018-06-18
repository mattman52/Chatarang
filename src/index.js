import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowesrRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render (
    <Router>
        <Route component={App} /> ,
    </Router>,
    document.getElementById('root')
)
registerServiceWorker()