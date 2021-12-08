import { useState, useEffect } from 'react'
import './App.css'
import { UserProvider } from '../context/UserContext'
import Navbar from './layout/Navigation/Navbar'
import AuthService from '../services/auth.service'
import Portal from './pages/Portal/Portal'
import Home from './pages/Home/Home'
<<<<<<< HEAD
import ActivityDetails from './pages/Portal/ActivitiesList/Activity/ActivityDetails/ActivityDetails'
=======

>>>>>>> 75b0f2a55831c9e2ab7f48180411344607646658
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
      .catch(() => storeUser(null))
  }, [])

  return (
    <>
      <UserProvider value={{ loggedUser, storeUser }}>
        <Navbar {...props} />
        <main>
<<<<<<< HEAD
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
=======
          {loggedUser ? <Portal /> : <Home storeUser = {storeUser}/>}
>>>>>>> 75b0f2a55831c9e2ab7f48180411344607646658
        </main>
      </UserProvider>
    </>
  )
}

export default App
