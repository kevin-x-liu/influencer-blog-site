import React, { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import BlogPost from './BlogPost/BlogPost'
import { CircularProgress } from '@material-ui/core'
import {BlogPostContext} from '../context/BlogPostContext';

function ShowPost(){
    const {postID} = useParams();
    const {posts} = useContext(BlogPostContext);
    const [display, setDisplay] = useState();
    useEffect(()=>{
        const findPost = posts.find(p => p.doc_id === postID);
        console.log("findPost", findPost);
        setDisplay(findPost);
    }, [posts]);
    return (
        <>
            {display !== undefined?<BlogPost props={display}/>:<div className="circular-progress"><CircularProgress style={{display:'flex'}}/></div>}
        </>
    )

}
export default ShowPost;