export const getPost = (subreddit) => {
                
        return(dispatch) => {
        
            dispatch({type: "GET_POSTS"})
            fetch(`https://www.reddit.com/r/${subreddit}.json`)
                .then((res) => res.json())
                .then((data) => dispatch({type: "RECEIVE_POSTS", posts: data.data.children }))
                .catch((error) => dispatch({type: "ERROR_RECEIVED", error}))

    }
};

export const toggleModal = (payload = {}) => {
    
        return(dispatch) =>{
        
            dispatch({
                type:"TOGGLE_MODAL",
                ...payload
        })
    }
};