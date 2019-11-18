
const initState = {
  posts : null,
  isLoadingPosts : true,
  image_url : '',
}


const rootReducer = (state = initState, action)=>{
  
  
        switch(action.type) {
      
        case "GET_POSTS": {
            return {
                ...state,
                isLoadingPosts : true,
            }
        }

        case "RECEIVE_POSTS": {
      
            const { posts } = action
            return {
                ...state,
                posts,
                isLoadingPosts : false,
            }
        }
    
        case "TOGGLE_MODAL": {
      
            const { url, isShowModal } = action
            return {
                ...state,
                url,
                isShowModal,
            }
        }

        default:
            return state
    }

}

export default rootReducer;
