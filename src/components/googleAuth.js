import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';
import { redirect } from "react-router-dom";
import React, { useState } from 'react';

const GoogleAuth = ({setGoogleAuth}) => {
    const [auth, setAuth] = useState();

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
           setAuth(tokenResponse.access_token)
        }
    });
    React.useEffect(() => {
            setGoogleAuth(auth)
      } , [auth]);
    return (
        <div>
            <button className="w-full subpixel-antialiased border border-indigo-600 rounded-md pl-20 pr-20 hover:bg-indigo-200 h-16" onClick={(event)=>{
              event.preventDefault()
              login()
            }}>
            <GoogleIcon /> Login with Google
            </button>;
        </div>
    )
}

export default GoogleAuth