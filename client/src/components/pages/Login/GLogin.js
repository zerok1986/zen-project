import React from 'react'
import { GoogleLogin } from 'react-google-login'
import './LoginPage.css'

const clientId =
  '748246079543-lmnsgg9ns35lgpv97e4ldhvnn7eiet94.apps.googleusercontent.com'

const GLogin = () => {
  const onSuccess = (res) => {
    console.info(`¡Bienvenido a moksha, ${res.profileObj.name}!`)
  }

  const onFailure = (res) => {
    console.info(`[Login with Google STATUS]: ${res.details}`)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Acceder"
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
