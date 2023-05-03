// import { format } from 'date-fns';
import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return(
        <div>
            <form>
                <input required type="email" placeholder='Email' />
                <input required type="password" placeholder='Password'/>
                <a href="/home">Login</a>
            </form>
        </div>
    )
};

export default Login;