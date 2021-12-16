import axios from 'axios'

class ActivitiesService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/activities`,
      withCredentials: true,
    })
  }

  getAllActivities = () => this.app.get('/allActivities')
  getOneActivity = (id) => this.app.get(`/activity/${id}`)
  createActivity = (activityData) => this.app.post('/newActivity', activityData)
  deleteActivity = (id) => this.app.delete(`/delete/${id}`)
  addParticipant = (id) => this.app.put(`/addParticipant/${id}`)
  deleteParticipant = (id) => this.app.put(`/deleteParticipant/${id}`)
}

export default ActivitiesService
