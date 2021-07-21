import React, {useState} from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    IconButton,
}from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete'

import DeleteController from './crud_helpers/DeleteController';
import { useComment } from '../../context/CommentContext'
import { useAuth } from "../authentication/context/AuthContext"

/**
 * Prop displaying a comment on a forum or blog post.
 * @param {*} commentItem prop containing data of a single comment
 * @returns 
 */
function CommentItem({commentItem}) {
    const [deleteMode, setDeleteMode] = useState(false)
    const { setComments } = useComment()
    const { isAdmin } = useAuth() 

    const cardStyle={
        width:"850px",
        borderRadius:"5px 0px 0px 5px",
    }
    const handleLike = () =>{
        //update number of likes on client and database
    }

    const handleDislike = ()=>{
        //update number of dislikes on client and database
    }

    const handleDeleteMode = () =>{
        setDeleteMode(dMode => !dMode)
    }

    const deleteButton = () =>{
        return(
            <>
            {!deleteMode
                ?<div className="edit-delete-container">
                        <IconButton onClick={handleDeleteMode}><DeleteIcon/></IconButton>
                </div>
                :<DeleteController 
                    forumItem={commentItem} 
                    setAllThreads={setComments} 
                    handleCancel={handleDeleteMode}
                    restUrl={'http://localhost:8080/comments/delete'}
                    idParam={"commentId"}
                />
            }
          </>
        )
    }

    const iconButtonStyle={
        margin:0,
        padding:"2px"
    }
    return (
        <div className="comment-item-container">       
            <Card style={{...cardStyle, width:isAdmin()?"850px":"900px"}}>
                <CardContent classes={{root:"card-root"}} >
                    <p className="forum">{commentItem.content}</p>
                    <Divider/>
                    <p className="forum">By: <b>{commentItem.user}</b> on <b>{commentItem.date}</b></p>
                    <p className="stats">
                       <IconButton onClick={handleLike} style={iconButtonStyle}>
                           <ThumbUpAltIcon />
                        </IconButton> 
                        {commentItem.likes} 
                        <IconButton onClick={handleDislike} style={iconButtonStyle}>
                            <ThumbDownIcon/>
                        </IconButton> 
                        {commentItem.dislikes}
                    </p>
                </CardContent>
            </Card>

            {isAdmin() && deleteButton()}
        </div>
    )
}

export default CommentItem
