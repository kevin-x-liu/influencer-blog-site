import React, { useState, useEffect } from 'react'
import ForumItem from './ForumItem'
import ForumView from './ForumView'
import ForumCRUD from './ForumCRUD'
import '../../css/forum-page.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'

//Context hook for interacting with forum data
import { useForum } from '../../context/ForumContext' 
import { useAuth } from "../authentication/context/AuthContext"

/**
 * List of all forum posts. New forum posts can be started by users. 
 * Edit and delete permissions will be reserved for the admin of the site.
 * @returns 
 */
function ForumList() {
    const {path, url} = useRouteMatch()
    const { allThreads, setAllThreads, fetchAllThreads } = useForum()
    const { currentUser } = useAuth()

    return (
        <> 
            <Switch>
                <Route exact path={path}>
                    {currentUser && 
                        <ForumCRUD />
                    }
                    {allThreads.length > 0
                        ?
                        <div className="forum-frame">
                            {
                                allThreads.map((forumObj)=>{
                                    return (<ForumItem key={forumObj.doc_id} forumItem={forumObj}/>)
                                })
                            }
                        </div>
                        :
                        <div className="circular-progress">
                            <CircularProgress style={{width:"100%", height:"100%"}}/>
                        </div>
                    }
                </Route>
                <Route path={`${path}/:threadId`}>
                        <ForumView allThreads={allThreads}/>
                </Route>
            </Switch>
        </>
    )
}

export default ForumList