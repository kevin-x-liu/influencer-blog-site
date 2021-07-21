import React, { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'
const ForumContext = createContext()

function useForum(){
    return useContext(ForumContext)
}

function ForumProvider({children}) {

    const [allThreads, setAllThreads] = useState([])

    useEffect(()=>{
        fetchAllThreads()
    }, [])

    const sortThreadsByTime = (threads) =>{
        threads.sort((a,b)=>{return b.timestamp - a.timestamp})
    }

    const fetchAllThreads = () =>{
        const url = new URL('http://localhost:8080/forums/get')
        console.log("fetch threads")
        axios.get(url)
            .then(response=>{
                const threadsData = response.data
                sortThreadsByTime(threadsData)
                setAllThreads(threadsData)
            })
            .catch(err=>{
                console.log("Error: ", err)
            })
    }

    const addForum = (forumObj) =>{
        const url = new URL('http://localhost:8080/forums/add')
        axios.post(url, forumObj)
            .then(()=>{
                fetchAllThreads()
            })
            .catch(err=>console.log("Error Adding Forum: ", err))
    }

    return (
        <ForumContext.Provider value={{allThreads, setAllThreads, fetchAllThreads, addForum}}>
            {children}
        </ForumContext.Provider>                    
    )
}
export default ForumProvider
export { useForum }
            