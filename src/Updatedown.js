import React from 'react';
import "./Updatedown.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import { Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function Updatedown() {
    return (
        <div className="updatedown">
            
                <Button variant=""  fullWidth >
               <div className="updatedownn"><VideocamIcon className="update__icon" /><h6>Video</h6></div>
               </Button > 
            <Button variant=""  fullWidth >
               <div className="updatedownnn"><ImageIcon className="update__icon" /><h6>Image</h6></div>
               </Button >
            <Button variant=""  fullWidth >
               <div className="updatedownnnn"><EmojiEmotionsIcon className="update__icon" /><h6>Felling/Activity</h6></div>
               </Button >
        
        </div>
    )
};

export default Updatedown;
