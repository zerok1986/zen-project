import React from 'react'
import { GoogleLogin } from 'react-google-login'
import './LoginPage.css'

const clientId =
  '748246079543-lmnsgg9ns35lgpv97e4ldhvnn7eiet94.apps.googleusercontent.com'

const GLogin = () => {
  const onSuccess = (res) => {
    console.info('[Login Success] currentUser: ', res.profileObj)
  }

  const onFailure = (res) => {
    console.info('[Login failed] Response: ', res)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  )
}

export default GLogin
