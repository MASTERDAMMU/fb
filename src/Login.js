import { Button } from '@material-ui/core';
import React from 'react';
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state,dispatch]=useStateValue();

    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            })
            .catch((error)=>alert(error.message));
        
    };
    
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png"
                    alt =" "/>

            </div>
            <div>
                <Button type ="submit" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
};

export default Login;
