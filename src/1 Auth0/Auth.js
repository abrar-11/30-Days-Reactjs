import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile'

const Auth = () => {
  const {  isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (

    
   
    <>
        <div className="container py-5 px-3 mx-auto">
            <h1 className="text-3xl text-blue-700 font-medium">Welcome to Auth0</h1>

           {
            !isAuthenticated ? ( <LoginButton/>) : (<LogoutButton/>)
           }
           <Profile/>
        </div>
    </>
  )
}

export default Auth