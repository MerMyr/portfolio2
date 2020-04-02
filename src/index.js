import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
        BrowserRouter as Router,
        Switch,
        Route
    } from "react-router-dom";

import App from './App';
import Home from './Pages/Home'
//import About from './Pages/About'
//import Contact from './Pages/Contact'; 


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Home}/>
               
            </Switch>
        </App>
    </Router>,




document.getElementById('root'));

//<Route path="/About" exact component={About}/>
//<Route path="/Contact" exact component={Contact}/>