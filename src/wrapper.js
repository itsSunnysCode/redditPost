import {connect} from 'react-redux'
import {getPost , toggleModal} from './actions/postsAction'


const mapStateToProps = (state) =>  {

        return {
            ...state,
    }
}

const mapDispatchToProps = (dispatch) =>  {

        return {
            getPost: (subreddit) => {dispatch(getPost(subreddit))},
            toggleModal: (payload) => {dispatch(toggleModal(payload))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps);