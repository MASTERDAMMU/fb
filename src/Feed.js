import React, { useEffect, useState } from 'react';
import "./Feed.css"
import StoryReel from './StoryReel';
import Post from './Post';
import Update from './Update';
import db from "./firebase"
function Feed() {
    const [posts, setposts]=useState([]);
    useEffect(() => {db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
    setposts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))));},[]);
        
    return (
    <div className="feed">
        <StoryReel />
        <Update />
        {posts.map((post)=>(
            <Post
            key={post.id}   
            profilePic={post.data.profilePic} 
            timestamp={post.data.timestamp}    
            username={post.data.username}    
            image={post.data.image}
            message={post.data.message}  />  ))}
                                
        </div>
    );
}

export default Feed;