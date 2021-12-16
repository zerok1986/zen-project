import axios from 'axios'

class ReviewsService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/reviews`,
      withCredentials: true,
    })
  }

  getAllReviews = () => this.app.get('/allReviews')
  getOneReview = (id) => this.app.get(`/review/${id}`)
  createReview = (reviewData) => this.app.post('/newReview', reviewData)
  deleteReview = (id) => this.app.delete(`/delete/${id}`)
}

export default ReviewsService
