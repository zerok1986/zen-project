import { Component } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './layout/Navigation/Navbar'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import AuthService from '../services/auth.service'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedUser: undefined,
    }

    this.authService = new AuthService()
  }

  componentDidMount() {
    this.authService
      .isloggedin()
      .then((response) => this.storeUser(response.data))
      .catch((err) => this.storeUser(null))
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user })
  }

  render() {
    return (
      <>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <main>
          <Switch>
            {this.state.loggedUser ? (
              <Redirect to="coaster-list" />
            ) : (
              <>
                <Route
                  path="/signup"
                  render={(props) => (
                    <SignupPage {...props} storeUser={this.storeUser} />
                  )}
                />
                <Route
                  path="/login"
                  render={(props) => (
                    <LoginPage {...props} storeUser={this.storeUser} />
                  )}
                />
              </>
            )}
          </Switch>
        </main>
      </>
    )
  }
}

export default App
