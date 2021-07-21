import { Typography, Button } from '@material-ui/core';
import React from 'react';

function ImageCard({info, image}){
    console.log(image.urls.small);
    return(
        // On click should take you to the post
        <div key={image.id} className="masonry-item" >
            <img 
                src={image.urls.small}
                alt={image.description}
            />
            {/* <div className="post-info">
                <Button variant="contained">Show Post</Button>
            </div> */}
            {/* <div class="button"><a href="#"> BUTTON </a></div> */}
        </div>
    )
}

export default ImageCard;