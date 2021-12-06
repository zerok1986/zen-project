import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true,
    })
  }

  signup = (username, email, pwd, role) =>
    this.app.post('/signup', { username, email, pwd, role })
  login = (username, pwd) => this.app.post('/login', { username, pwd })
  logout = () => this.app.get('/logout')
  isloggedin = () => this.app.get('/isloggedin')
}

export default AuthService
