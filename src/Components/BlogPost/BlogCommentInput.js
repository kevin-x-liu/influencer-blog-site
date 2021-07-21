import React from 'react'
import {
    Input,
    Button
}from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useComment } from '../../context/CommentContext'
import { useAuth } from "../authentication/context/AuthContext";

/**
 * Form component that lets users submit their own comments
 * to a forum/blog. This submits comments to the Cloud Firestore database
 * @returns 
 */
function BlogCommentIinput() {
    const { postID } = useParams()
    const { addCommentToBlog } = useComment()
    const { currentUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = document.getElementById("comment-input").value
        const today = new Date();
        const dateFormat = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
        document.getElementById("comment-input").value = ""
        
        const commentObj = { 
                content: comment, 
                dislikes:0, 
                likes: 0, 
                postID: postID, 
                user:currentUser.displayName,
                date: dateFormat,
                timestamp: Date.now()
            }

        addCommentToBlog(commentObj, postID)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        document.getElementById("comment-input").value = ""
    }
    const inputStyling={
        fontFamily:"Martel", 
        padding:"5px",
        borderRadius:"5px 5px 0px 0px"
    }
    return (
        <>          
            <div className="comment-spacer-top"/>       
            <form className="comment-input-container">
                <Input 
                    rows={5}
                    classes={{root:"comment-input"}} 
                    multiline={true} 
                    disableUnderline={true}
                    placeholder="Comment here"
                    style={inputStyling}
                    id="comment-input"
                />
                <div className="comment-button-container">
                    <div className="comment-button">
                        <Button onClick={handleSubmit} value="post-button" type="submit" classes={{root:"comment-button-label", label:"comment-button-label"}}>Post</Button>
                    </div>
                    <div className="comment-button">
                        <Button onClick={handleCancel} value="cancel-button" type="submit" classes={{root:"comment-button-label", label:"comment-button-label"}}>Cancel</Button>
                    </div>
                </div> 

            </form>
        </>
    )
}

export default BlogCommentIinput
