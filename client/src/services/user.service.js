import axios from 'axios'

class UserService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/users',
      withCredentials: true,
    })
  }

  getAllUsers = () => this.app.get('/allUsers')
  getOneUser = (id) => this.app.get(`/user/${id}`)
  editUser = (id, userInfo) => this.app.put(`/edit/${id}`, userInfo)
  deleteUser = (id) => this.app.delete(`/delete/${id}`)
}

export default UserService
