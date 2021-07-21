import React, { useContext, useEffect, useState } from 'react'
import {
    Button
}from '@material-ui/core'
import { BlogPostContext } from '../../context/BlogPostContext';
import { useHistory } from 'react-router';
const blurbData = `Camille is a world-famous model who has only ever wanted to be normal, 
even though her mother has always pushed her to become a superstar. Now, she's a college dropout,
working as a social media influencer to make the world a more positive place.`

/**
 * Grid featuring the most current blog post, featured merchandise, and a short bio
 * of Camille. 
 * @param {*} blogPost The most current blog post 
 * @returns 
 */
function FeaturedGrid({blogPost}) {
    const {posts} = useContext(BlogPostContext);
    const history = useHistory();
    //temporary function to get random pics
    const randomURL = 'https://picsum.photos/seed/30/450/550'
    const randomURL2 = 'https://picsum.photos/seed/90/450/200'
    const randomURL3 = 'https://picsum.photos/seed/501/450/200'
    // const randomURL4 = 'https://picsum.photos/seed/405/450/200'
    const randomURL4 = 'https://media.endclothing.com/media/catalog/product/2/2/22-07-2020_620969-TIV74-1070_1_1.jpg'

    const [recent, setRecent] = useState([{image: randomURL2}, {image:randomURL3}])

    const buttonStyle={
        margin:0,
        padding:0,
        borderRadius:"10px"
    }


    useEffect(() => {
        if (posts.length === 0){
            console.log("oops")
        }
        else{
            setRecent(posts);
        }
    }, [posts])
    return (
        <div className="featured-blogs">
            <div className="featured-container--long">
                <h2>About Me</h2>
                <img className="featured-img--long" src={randomURL}/>
                <p className="blurb">
                    {blurbData}
                </p>
            </div>
            <div className="featured-container--short" onClick={() => history.push(`/blog/${recent[0].doc_id}`)}>
                <h2>Latest Blog Post</h2>
                <Button style={buttonStyle}>
                    <img className="featured-img--short" src={recent[0].image}/>
                    {/* <div className="overlaid-text">overlain text</div> */}

                </Button>
            </div>
            <div className="featured-container--short">
                <Button style={buttonStyle} onClick={() => history.push(`/blog/${recent[1].doc_id}`)}>
                    <img className="featured-img--short" src={recent[1].image}/>
                </Button>
            </div>
            <div className="featured-container--short">
                <h2>Latest Merchandise</h2>
                <Button style={buttonStyle} onClick={() => history.push('/shop')}>
                    <img className="featured-shop-img--short" src={randomURL4}/>
                </Button>
            </div>
        </div>
    )
}

export default FeaturedGrid
