import React from 'react'
import FBLogo from '../../icons/facebook-logo.svg'
import InstaLogo from '../../icons/insta-logo.svg'
import TwitterLogo from '../../icons/twitter-logo.svg'

function Footer() {

    const handleClick = (link)=>{
        window.open(link)
    }
    return (
        <footer className="footer">
            <div>
                <img onClick={()=>handleClick("https://www.facebook.com/")} className="social-icon" src={FBLogo}/>
                <img onClick={()=>handleClick("https://www.instagram.com/")} className="social-icon" src={InstaLogo}/>
                <img onClick={()=>handleClick("https://www.twitter.com/")} className="social-icon" src={TwitterLogo}/>
            </div>
                <h4><a style={{fontFamily:"Martel", textDecoration:"none", color:"black", fontWeight:"bold"}} href="mailto:camille.corner@gmail.com">camille.corner@gmail.com</a></h4>
        </footer>
    )
}

export default Footer
