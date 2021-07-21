import React, { useState } from "react";
import "../../css/home-page.css";
import { Button, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { home, blog, forum, shop, login, cart } from "./routerPaths";
import { useForum } from "../../context/ForumContext";
import { useAuth } from "../authentication/context/AuthContext";
import PersonIcon from "@material-ui/icons/Person";
/**
 * Navigation bar for Home, Blog, Forum, and Shop.
 * This is where routing is handled. Note that route paths are defined in "routerPaths.js"
 * @returns
 */

function HomeNavbar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const { fetchAllThreads } = useForum();
  const [navSelector, setNavSelector] = useState({
    home: true,
    blog: false,
    forum: false,
    shop: false,
    login: false,
    cart: false
  });
  const handleClick = (e) => {
    const selectorName = e.currentTarget.name;
    const navSelectorNone = {
      home: false,
      blog: false,
      forum: false,
      shop: false,
      login: false,
      cart: false
    };
    setNavSelector({ ...navSelectorNone, [selectorName]: true });
    switch (selectorName) {
      case "home":
        history.push(home);
        break;
      case "blog":
        history.push(blog);
        break;
      case "forum":
        history.push(forum);
        handleForumRefresh();
        break;
      case "shop":
        history.push(shop);
        break;
      case "cart":
        history.push(cart)
        break;
      case "login":
        history.push(login);
        break;
      default:
        return;
    }
  };

  const handleLogout = () => {
    history.push(home)
    logout()
  }

  const loginOrlogout = () => {
    if (currentUser) {
      return (
        <Button
          name="logout"
          onClick={handleLogout}
          classes={{ label: "navbutton-label" }}
        >
          Logout
        </Button>
      );
    } else {
      return (
        <Button
          name="login"
          onClick={handleClick}
          classes={{ label: "navbutton-label" }}
        >
          Login
        </Button>
      );
    }
  };

  const handleForumRefresh = () => {
    fetchAllThreads();
  };
  return (
    <div className="navbar">
      <div className="navbutton-group">
        <div className={navSelector.home ? "navbutton--border" : "navbutton"}>
          <Button
            name="home"
            onClick={handleClick}
            classes={{ label: "navbutton-label" }}
          >
            Home
          </Button>
        </div>
        <div className={navSelector.blog ? "navbutton--border" : "navbutton"}>
          <Button
            name="blog"
            onClick={handleClick}
            classes={{ label: "navbutton-label" }}
          >
            Blog
          </Button>
        </div>
        <div className={navSelector.forum ? "navbutton--border" : "navbutton"}>
          <Button
            name="forum"
            onClick={handleClick}
            classes={{ label: "navbutton-label" }}
          >
            Forum
          </Button>
        </div>
        <div className={navSelector.shop ? "navbutton--border" : "navbutton"}>
          <Button
            name="shop"
            onClick={handleClick}
            classes={{ label: "navbutton-label" }}
          >
            Shop
          </Button>
        </div>
        <div className={navSelector.cart ? "navbutton--border" : "navbutton"}>
            <Button name="cart" onClick={handleClick} classes={{label:"navbutton-label"}}>Cart</Button>
        </div>
      </div>
      {/* <div className="search-bar">
                <IconButton> 
                    <SearchIcon/>
                </IconButton>
                <Input disableUnderline={true} classes={{root:"search-bar__form"}} id="search-input" placeholder={"Search"}/>
            </div> */}
      {currentUser && (
        <div
          style={{ fontSize: "80%", display: "flex", alignContent: "baseline" }}
        >
          <PersonIcon style={{ fontSize: "18px" }} />
          {currentUser.displayName}
        </div>
      )}
      <div className={navSelector.login ? "navbutton--border" : "navbutton"}>
        {loginOrlogout()}
      </div>
    </div>
  );
}

export default HomeNavbar;
