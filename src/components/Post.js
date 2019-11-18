import React from 'react'
import '../App.css'



const Post  = (props)=>  {
    
    const { toggleModal } = props
    const {
        author,
        thumbnail,
        thumbnail_height,
        thumbnail_width,
        created_utc,
        title,
        subreddit_name_prefixed,
        num_comments,
        url,
        ups,
    } = props.data;
    
       
    let  postTime = new Date(created_utc);
    
    return(
        
        <div className="post">

            <div className="Post_Details">
                
                <div>
                    <strong><p>{ups} upvotes</p></strong>
                </div>
                
                <div>
                    <p><strong>{subreddit_name_prefixed}</strong></p>
                </div>

                <div>
                    <p>Posted by <strong>{author}</strong></p>
                </div>

                <div>
                    <p> {postTime.getHours()} Hours ago</p>
                </div>
            
            </div>

            <div className="Post_image">    
                <div>
                    <img 
                    src={thumbnail}
                    alt="Post"
                    height={`${thumbnail_height}`}
                    width={`${thumbnail_width}` }
                    onClick={() => toggleModal({
                        url,
                        isShowModal : true,
                    })} />
                </div>

                <div>
                   <h2>{title}</h2>
                </div>
            
            </div> 

            <div className="comments">
                    <p>{num_comments} comments</p>
            </div>
            
        </div>
       
    );
}

export default Post;