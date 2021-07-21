import React from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'

/**
 * Component used to handle deletion of comments and forums. 
 * Handles delete from actual database. The UI is an animated one that
 * allows users to cancel or detete data.
 * @param {*} param0 
 * @returns 
 */
function DeleteController({forumItem, setAllThreads, handleCancel, restUrl, idParam}) {

    const deleteOptionsStyle={
        fontFamily:"Martel",
        fontWeight:"bold",
        height:"50%",
        width:"100%",
    }
    //make sure to delete associated comments as well...
    const handleDelete = () => {
        const url = new URL(restUrl)
        url.searchParams.append(idParam, forumItem.doc_id)
        axios.delete(url)
            .catch(err=>console.log("Fourm post deletion error: ", err))
        
        setAllThreads(allThreads => allThreads.filter(thread=>thread.doc_id !== forumItem.doc_id))
    }

    return (
        <div className="edit-delete-container grow-side">
            <div className="opacity-anim">
                <Button onClick={handleDelete} style={deleteOptionsStyle}>Delete</Button>
                <Button onClick={handleCancel} style={deleteOptionsStyle}>Cancel</Button>
            </div>
        </div>
    )
}

export default DeleteController
