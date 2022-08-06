import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <img className="img1" src={process.env.PUBLIC_URL + '/img2.png'}  alt=""/ >
            <img className="img2" src={process.env.PUBLIC_URL + '/img1.png'}  alt=""/>

           <div className="login_container">
               <img src={process.env.PUBLIC_URL + '/cc.png'} alt=""/> 
                <div className="login_text">
                    <h1>Sign in to ChitChat</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
