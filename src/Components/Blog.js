import React, {useEffect, useState, useContext} from "react";
import { Button, Container, TextField } from "@material-ui/core";
import PostCard from "./PostCard"
import ShowPost from "./ShowPost.js"
import AddCard from "./AddCard"
import '../css/Blog.css'
import Masonry from 'react-masonry-css'
import {useRouteMatch, Switch, Route, useHistory} from "react-router-dom"
import {BlogPostContext} from '../context/BlogPostContext'
import { useAuth } from "./authentication/context/AuthContext";

function Blog(){
    // const [posts, setPosts] = useState([]);
    const { posts } = useContext(BlogPostContext);
    const { isAdmin } = useAuth()
    const match = useRouteMatch();
    const history = useHistory();
    // const [input, setInput] = useState("canyon");
    // const [random, setRandom] = useState(false);

    //Will retrieve random photos from the API for testing
    // const getSomePhotos = async () => {
    //     const url = new URL('https://api.unsplash.com/search/photos');
    //     url.searchParams.append('client_id', process.env.REACT_APP_access_key);
    //     url.searchParams.append('query', input);
    //     // console.log(input);
    //     // console.log(url.toString());
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(resp => setPosts(resp.results))
    //         .then(resp => resp);
    //     setRandom(true);
    // }
    /**
     * Retrieves the photos from the backend
     * 
     */
    // const getMyPhotos = async () => {
    //     fetch('/blog/get')
    //         .then(resp => resp.json())
    //         .then(resp => setPosts(resp));
    // }

    useEffect(() =>{
        // getSomePhotos();
        // getMyPhotos();
    }, [posts])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    // console.log("posts", posts);
    return (
        <Switch>
            <Route exact path={match.path}>
                <Container >
                    {/* {posts && posts.map(p => <Post info={p} />)} */}
                    {/* <TextField id="search-keyword" label="Enter Search" onChange={e => setInput(e.target.value)} defaultValue="canyon"/> */}
                    {/* <Button onClick={() => getSomePhotos()}>Search</Button> */}
                    {isAdmin() &&
                    <div style= {{display:"flex", justifyContent:"center"}}>
                        <Button variant="contained" onClick={() => history.push(`${match.path}/addBlogPost`)}>Add Blog Post</Button>
                    </div>
                    }
                    <br></br>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        
                    {posts && posts.map( (post) => <PostCard key={post.doc_id} info={post}/>)}
                    </Masonry>
                </Container>
            </Route>
            <Route path={`${match.path}/addBlogPost`}>
                <AddCard />
            </Route>
            <Route path={`${match.path}/:postID`}>
                <ShowPost/>
            </Route>
        </Switch>
    );
}



export default Blog;