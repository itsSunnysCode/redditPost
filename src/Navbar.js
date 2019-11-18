import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import container from './wrapper'
import './App.css'



const subreddits = [
    'alternatives',
    'pics',
    'gifs',
    'adviceanimals',
    'images',
    'cats',
    'photoshopbattles',
    'hmmm',
    'all',
    'aww'
];


class Navbar extends Component {
    
    
    handleRouteChange = (path) => {
        const {history, getPost} = this.props;
                history.push(`/${path}`);
                getPost(path);
    }
    
    
    render() {
        
        return (
            <div>
                <ul>
                        {subreddits && subreddits.map(subreddit => (
                            <li key={subreddit}>         
                                <a onClick={()=>this.handleRouteChange(subreddit)}>
                                    {subreddit}
                                </a>
                            </li>
                    ))}
                </ul> 
            </div>
        )
    }
}

export default container(withRouter(Navbar))


