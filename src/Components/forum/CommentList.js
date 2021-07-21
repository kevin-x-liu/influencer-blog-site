import React, { useState, useEffect } from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import {
    Divider,
    CircularProgress
}from '@material-ui/core'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//comment data context
import { useComment } from '../../context/CommentContext'
import { useAuth } from "../authentication/context/AuthContext"

/**
 * List of comments displayed under a forum or blog post
 * This component is a parent of ForumView.js
 * @returns 
 */
function CommentList() {
    const { threadId } = useParams()
    const { currentUser } = useAuth()
    const { comments, setComments, getComments } = useComment()
    useEffect(()=>{
        setComments([])
        getComments(threadId)
    }, [])

    return (
        <div>
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
            {currentUser ?
                <CommentInput setComments={setComments} fetchComments={getComments} />
                :<div style={{marginBottom:"60vh"}}/>
            }
        </div>
    )
}

export default CommentList
