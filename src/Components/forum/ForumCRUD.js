import React, { useState } from 'react'
import axios from 'axios'

import {
    Button,
    ButtonGroup,
    Input
} from '@material-ui/core'

//forum context hook
import { useForum } from '../../context/ForumContext'
import { useAuth } from "../authentication/context/AuthContext";

/**
 * Responsible for Create, Update, and Delete operations pertaining
 * to the forum posts
 * @returns 
 */
function ForumCrud() {
    const [open, setOpen] = useState(true)
    const { addForum } = useForum()
    const { currentUser } = useAuth()

    const inputStyle={
        padding:"5px",
        fontFamily:"Martel",
        fontWeight:"bold"
    }
    const postButtonStyle={
        width:"100%",
        fontFamily:"Martel",
        fontWeight:"bold",
    }

    const handleOpen = () =>{
        setOpen(open=>!open)
    }

    const handlePost = (e) =>{
        e.preventDefault()
        const threadTitle = e.target["forum-input"].value
        e.target["forum-input"].value=""
        const today = new Date();
        const dateFormat = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}` 
        const forumObj = { 
            title: threadTitle, 
            date: dateFormat, 
            user:currentUser.displayName, 
            content:null,
            timestamp:Date.now(),
            commentCount: 0
        }
        addForum(forumObj)
    }

    return (
        <>
            <div className="forum-crud-container">
                <Button onClick={handleOpen} classes={{label:"forum-crud-button"}}>New Thread</Button>
            </div>
            {open ?
                <form className={"forum-input"} onSubmit={handlePost}>
                    <Input 
                        id="forum-input" 
                        style={inputStyle} 
                        classes={{root:"forum-input-textarea"}} 
                        rows={5} 
                        disableUnderline = {true} 
                        multiline={true} 
                        placeholder="What's on your mind?"
                    />
                    <Button type="submit" style={postButtonStyle}>Post</Button>
                </form>
            :    
                <div className={"forum-input forum-input-closing"}>
                    <Input style={inputStyle} classes={{root:"forum-input-textarea"}} rows={5} disableUnderline = {true} multiline={true} placeholder="What's on your mind?"/>
                    <Button style={postButtonStyle}>Post</Button>
                </div>
            }
        
        </>
    )
}

export default ForumCrud
