import React, { useState, useEffect } from 'react'
import CommentItem from '../forum/CommentItem'
import BlogCommentInput from './BlogCommentInput'
import {
    Divider,
}from '@material-ui/core'
import { useParams } from 'react-router-dom'

//comment data context
import { useComment } from '../../context/CommentContext'
import { useAuth } from "../authentication/context/AuthContext"

/**
 * List of comments displayed under a forum or blog post
 * This component is a parent of ForumView.js
 * @returns 
 */
function BlogCommentList() {
    const { postID } = useParams()
    const { currentUser } = useAuth()
    const { comments, setComments, getComments } = useComment()
    useEffect(()=>{
        setComments([])
        getComments(postID)
    }, [])

    return (
        <div>        
            {currentUser &&
                <BlogCommentInput/>
            }
            {comments.length > 0
            ? comments.map((comment, index)=>{
                return(
                    <>
                        <CommentItem 
                            key={comment.doc_id} 
                            commentItem={comment}
                        />
                        <Divider key={index}/>
                    </>
                )
            })
            :
            <div className="first-comment">
                <h2>Be the first to comment!</h2>
                {/* <CircularProgress style={{width:"100%", height:"100%"}}/> */}
            </div>

            }

        </div>
    )
}

export default BlogCommentList
