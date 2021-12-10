import axios from 'axios'

class UserService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/users',
      
    })
  }

  getAllUsers = () => this.app.get('/allUsers')
  getOneUser = (id) => this.app.get(`/user/${id}`)
  editUser = (id) => this.app.post(`/edit/${id}`)
  deleteUser = (id) => this.app.delete(`/delete/${id}`)
}

export default UserService
