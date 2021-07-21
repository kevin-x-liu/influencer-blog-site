import { Typography, Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

function PostCard({info}){
    const history = useHistory();
    const {path, url} = useRouteMatch();
    const openPost = () => {
        console.log(info.title);
        history.push(`${path}/${info.doc_id}`)
        // alert(post.doc_id);
    }

    return(
        // On click should take you to the post
        <div key={info.title} className="masonry-item" onClick={openPost}>
            <img 
                width="400"
                src={info.image}
                alt={info.title}
            />
            {/* <div className="post-info">
                <Button variant="contained">Show Post</Button>
            </div> */}
            {/* <div class="button"><a href="#"> BUTTON </a></div> */}
        </div>
    )
}

export default PostCard;