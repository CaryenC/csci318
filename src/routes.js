import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import InfoOne from './pages/InfoOne';
import Overview from './pages/Overview';
import TopBar from './components/Navbar/TopBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function routes() {
    return (
        <div>
            <Router>
            <TopBar/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/overview" component={Overview}></Route>
                <Route exact path="/info-one" component={InfoOne}></Route>
                <Route path="/about" component={About}></Route>
            </Router>
        </div>
    )
}

export default routes
