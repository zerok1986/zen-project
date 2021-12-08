import { useState, useEffect } from 'react'
import './App.css'
import { UserProvider } from '../context/UserContext'
import Navbar from './layout/Navigation/Navbar'
import AuthService from '../services/auth.service'
import Portal from './pages/Portal/Portal'
import Home from './pages/Home/Home'
const authService = new AuthService()

const App = (props) => {
  const [loggedUser, setLoggedUser] = useState(undefined)
  const [detailsClick, setClick] = useState(false)

  const setDetailsClick = () => {
    setClick(true)
  }

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
      <UserProvider
        value={{ loggedUser, storeUser, detailsClick, setDetailsClick }}
      >
        <Navbar {...props} />
        <main>{loggedUser ? <Portal /> : <Home storeUser={storeUser} />}</main>
      </UserProvider>
    </>
  )
}

export default App
