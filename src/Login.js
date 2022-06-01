import React from 'react'
import './App.css'
import {useMoralis} from 'react-moralis'

const Login =() => {

    const {authenticate, isAuthenticating, isAuthenticated} = useMoralis()

    const connect = async () => {
        
         await authenticate();
        console.log(isAuthenticated)
        console.log(isAuthenticating)
    }
  return (
    <div className='connect'>
    <button onClick={connect}>Connect MetaMask</button> 
    </div> 

  )
}

export default Login