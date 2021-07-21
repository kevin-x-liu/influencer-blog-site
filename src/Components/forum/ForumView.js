import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import{
    Divider
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import axios from 'axios'

/**
 * This is the view of a single forum thread/post displaying  the forum title, author, date
 * and comments below. In addition, this is where new comments can be posted.
 * @param allThreads All forum threads, which are filtered based on threadId url parameter
 * @returns 
 */
function ForumView({allThreads}) {
    const { threadId } = useParams()
    const [currentForum, setCurrentForum] = useState(null)
    
    useEffect(()=>{
        setCurrentForum(allThreads.find(thread=>thread.doc_id === threadId))
    }, [])


    return (
        <div className="forum-view">
            {currentForum &&
                <>
                    <h3>{currentForum.title}</h3>
                    <h4>Posted by {currentForum.user} on {currentForum.date}</h4>
                    <Divider/>
                    <CommentList/>
                </>
            }
        </div>
    )
}

export default ForumView
