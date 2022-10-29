import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

const FacebookAuth = ({setFacebookAuth}) => {
   const [auth , setAuth] = React.useState()
    const responseFacebook = (response) => {
        setAuth(response.accessToken)
    }
    React.useEffect(() => {
        setFacebookAuth(auth)
      },[auth]);
    return (
        <div>
            <FacebookLogin
                icon={<FacebookIcon/>}
                cssClass='w-full subpixel-antialiased border border-indigo-600 rounded-md pl-20 pr-20 hover:bg-indigo-200 h-16'
                appId="530977785035319"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    )
}

export default FacebookAuth