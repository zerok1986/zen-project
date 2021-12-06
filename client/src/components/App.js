import { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './layout/Navigation/Navbar'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import AuthService from '../services/auth.service'

const App = () => {
 
  const [loggedUser, setLoggedUser] = useState(undefined)
  
  const authService = new AuthService()

  const storeUser = (user) => {
    setLoggedUser(user)
  }

  useEffect(() => {
    authService
      .isloggedin()
      .then((response) => storeUser(response.data))
      .catch((err) => storeUser(null))
  }, [])

  return (
    <>
      <Navbar storeUser={storeUser} loggedUser={loggedUser} />

      <main>
        <Switch>
          {loggedUser ? (
            <Redirect to="/" />
          ) : (
            <>
              <Route
                path="/signup"
                render={(props) => (
                  <SignupPage {...props} storeUser={storeUser} />
                )}
              />
              <Route
                path="/login"
                render={(props) => (
                  <LoginPage {...props} storeUser={storeUser} />
                )}
              />
            </>
          )}
        </Switch>
      </main>
    </>
  )
}

export default App
