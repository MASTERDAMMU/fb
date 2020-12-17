import React,{useState} from 'react';
import "./Updatetop.css";
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import * as firebase from "firebase";
import 'firebase/firestore';



 function Updatetop() {
    const [{user},dispatch]=useStateValue();
    const [input, setinput] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const handleSubmit = (e) =>{
    e.preventDefault();
    db.collection("posts").add({
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        profilePic:user.photoURL,
        username:user.displayName,
        image:imageUrl,
    });
    setinput("");
    setimageUrl("");
    };
    return (
        <div className="input">
            <div className="input__field">
                <Avatar src={user.photoURL}/>
                <form>
                <input
                value={input}
                onChange={(e)=> setinput(e.target.value)}
                 placeholder={`What's on your mind ${user.displayName}?` } size="40" />
                <input
                value={imageUrl}
                onChange={(e)=>setimageUrl(e.target.value)}
                 placeholder="image url" size="20"/>
                <button onClick={handleSubmit} type="submit">hidden Button</button>
                </form>
            </div>
            
        </div>
        
    );
}
export default Updatetop;