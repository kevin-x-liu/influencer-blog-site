import React, { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'
const CommentContext = createContext()

function useComment(){
    return useContext(CommentContext)
}

function CommentProvider({children}) {

    const [comments, setComments] = useState([])

    const sortCommentsByTime = (comments) =>{
        comments.sort((a,b)=>{return b.timestamp - a.timestamp});   
    }

    const getComments = (threadId) =>{
        const url = new URL('http://localhost:8080/comments/getFromForum')
        url.searchParams.append('forumId',threadId)
        axios.get(url)
            .then(response=>{
                const commentData = response.data
                sortCommentsByTime(commentData)
                setComments(commentData)
            })
            .catch(err=>{
                console.log("Error getting comments: ", err)
            })
    
    }

    const addComment = (commentObj, threadId) => {
        const url = new URL('http://localhost:8080/comments/add')
        url.searchParams.append("forumId", threadId)
        axios.post(url, commentObj)
            .then(()=>{
                getComments(threadId)
            })
            .catch(err=>{console.log("Add comment error: ", err)})
    }

    const addCommentToBlog = (commentObj, postID) =>{
        const url = new URL('http://localhost:8080/comments/addToBlog')
        axios.post(url, commentObj)
            .then(()=>{
                getComments(postID)
            })
            .catch(err=>{console.log("Add comment error: ", err)})
    } 

    return (
        <CommentContext.Provider value={{comments, setComments, getComments, addComment, addCommentToBlog}}>
            {children}
        </CommentContext.Provider>                    
    )
}
export default CommentProvider
export { useComment }
            