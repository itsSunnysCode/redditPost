import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/Layout'
import Navbar from './Navbar'



const App = () => {
        return(
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/:subreddit" component={Layout} />
                        <Redirect path="/" to="/cats" />
                    </Switch>
                </Router> 
    );

}

export default App

