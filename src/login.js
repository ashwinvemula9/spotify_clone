import React from 'react';
import './login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login_main">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  alt="spotify-logo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
