import React, { Component } from 'react'
import container from '../wrapper'
import Modal from './Modal'
import Post from './Post'
import '../App.css'


class Layout extends Component {

    componentDidMount(){
        
        const {getPost, match} = this.props;
        getPost(match.params.subreddit);
        
    }
    render() {
            
            let finalData = [];
            const {
                posts,
                isLoadingPosts,
                toggleModal,
                url,
                isShowModal,
            } = this.props;
        
            finalData = posts && posts.filter(
                (post) => post.data.url !== "" 
                && post.data.thumbnail !== "" 
                && !post.data.is_self 
                && post.data.thumbnail!== "default");
            
            return (

                <div>
                        { isLoadingPosts && (
                            <div className="center_data">
                                <img 
                                src={require("./../GIF/loadingGIF.gif")} 
                                alt="loading" 
                                height="300px" 
                                width="500px" 
                                />
                            </div>
                        )}
                    
                        { (!isLoadingPosts && posts && posts.length > 0) ? (
                            <div>
                                { 
                                    (finalData.length > 0) ? (
                                    finalData.map(
                                    (item) => <Post
                                    data={item.data}
                                    toggleModal={toggleModal}
                                    key={item.data.id}
                                    />)
                                    ) : (
                                        <h1 className="center_data">No data Found</h1>
                                    )
                                }
                            </div>
                            ) : (
                            <div>
                                {!isLoadingPosts && (<h1 className="center_data">No data Found</h1>)}
                            </div>
                            )
                        }

                        { finalData && finalData.map((item) => (
                                <Post
                                data={item.data}
                                key= {item.data.id}
                                toggleModal={toggleModal}
                                />
                        )) 
                        }

                        {isShowModal && (
                    
                        <Modal toggleModal={toggleModal} src={url}  />                   
                    
                        )
                        }
                </div> 
        )
    }
}
 
export default container(Layout);