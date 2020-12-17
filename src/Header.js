import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ujj from "./ujj.jpeg"
import { useStateValue } from './StateProvider';
function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="header">
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png" 
            alt=""/>
        <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search" />
        </div>
             
        </div>
        <div className="header__center">
            <div className="header__option-active">
            <HomeIcon fontSize="large" />
            </div>
        <div className="header__option">
            <FlagIcon fontSize="large" />
            </div>
        <div className="header__option">
            <SubscriptionsIcon fontSize="large" />
            </div>
        <div className="header__option">
            <StorefrontIcon fontSize="large" />
            </div>
        <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
            </div>


        </div>

           
        <div className="header__right">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
        </div>
    );
}

export default Header;
