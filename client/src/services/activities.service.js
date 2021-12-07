import axios from 'axios'

class ActivitiesService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/activities',
    })
  }

  getAllActivities = () => this.app.get('/allActivities')
  getOneActivity = (id) => this.app.get(`/activity/${id}`)
  createActivity = (activityData) => this.app.post('/newActivity', activityData)
  deleteActivity = (id) => this.app.delete(`/delete/${id}`)
}

export default ActivitiesService
