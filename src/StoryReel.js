import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import dee from "./dee.jpeg";
import ujj from "./ujj.jpeg";
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://www.setaswall.com/wp-content/uploads/2018/11/PUBG-Phone-Wallpaper-02-1080x2340.jpg"
            profileSrc="https://www.setaswall.com/wp-content/uploads/2018/11/PUBG-Phone-Wallpaper-02-1080x2340.jpg"
            title="Anuj Saxena"
             />
            

            <Story
            image={dee}
            profileSrc={dee}
            title="Deepanshu Taneja"
             />
            <Story
            image={ujj}
            profileSrc={ujj}
            title="Ujjwal"
             />
            <Story/>
            <Story />
           

            
        </div>
    )
}

export default StoryReel
