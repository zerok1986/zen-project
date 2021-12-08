import { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserProvider } from '../context/UserContext'
import Navbar from './layout/Navigation/Navbar'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import AuthService from '../services/auth.service'
import Portal from './pages/Portal/Portal'
import Home from './pages/Home/Home'
import ActivityDetails from './pages/Portal/ActivitiesList/Activity/ActivityDetails/ActivityDetails'
const authService = new AuthService()

const App = (props) => {
  const [loggedUser, setLoggedUser] = useState(undefined)

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
      <UserProvider value={{ loggedUser, storeUser }}>
        <Navbar {...props} />

        <main>
          <Switch>
            <Route
              path="/activities/activity/:id"
              render={(props) => <ActivityDetails {...props} />}
            />

            {loggedUser ? (
              <Redirect to="/portal" />
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

        {loggedUser ? <Portal /> : <Home />}
      </UserProvider>
    </>
  )
}

export default App
