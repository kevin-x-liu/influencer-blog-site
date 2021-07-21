import React from 'react'
import FeaturedGrid from './FeaturedGrid'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'
import LogIn from "../authentication/LogIn"
import SignUp from '../authentication/SignUp'
import ShopItems from '../ShopItems'
import ShopCart from '../ShopCart1'
import NavigationDrawer from './NavigationDrawer'
import Blog from '../Blog'
import '../../css/home-page.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

//testing
import ForumList from '../forum/ForumList'
import { home, blog, forum, shop, login, cart, signup } from './routerPaths'
import AvatorIcon from '../../icons/avatar.svg'



/**
 * Home/Landing page containing navigation bar,
 * featured blog posts and shop items. 
 * All navigation/routing is handled on this pages
 * @returns Aesthetic landing page HTML
 */
function HomePage() {
    
    const fetchBlogs = () => {
        //code here to get featured blogs
        
    }

    const fetchShopItems = () => {
        //code here to get featured shop items
    }

    //use clsx to manage button look when selected
    return (
        <Router>
            <h1 className="header">
                <img className="header-img" src={AvatorIcon} />
                Camille's Corner
            </h1>
            <HomeNavbar/>
            <div className="menu-button">
                <NavigationDrawer/>
            </div>

            <Switch>
                <Route exact path={home}>
                    <FeaturedGrid/>
                </Route>
                <Route path={forum}>
                   <ForumList/> 
                </Route>
                <Route path ={blog}>
                    <Blog />
                </Route>
                <Route path ={shop}>
                    <ShopItems/>
                </Route>
                <Route path={login}>
                    <LogIn/>
                </Route>
                <Route path={cart}>
                    <ShopCart/>
                </Route>
                <Route path={signup}>
                    <SignUp/>
                </Route>
            </Switch>
            
            <Footer/>
        </Router>
    )
}

export default HomePage
