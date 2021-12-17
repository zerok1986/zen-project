import React from 'react'
import UserService from '../../services/user.service'
import ReviewsService from '../../services/reviews.service'
import { useEffect, useState, useContext } from 'react'
import ProfileCard from '../pages/ProfilePage/ProfileCard/ProfileCard'
import UserContext from '../../context/UserContext'
import Review from '../pages/ProfilePage/Reviews/ReviewList/Review/Review'

const userService = new UserService()
const reviewsService = new ReviewsService()

const AdminPanel = () => {
  const [usersList, setUserList] = useState([])
  const [reviewsList, setReviewsList] = useState([])
  const { showText } = useContext(UserContext)

  const refreshUsers = () => {
    userService
      .getAllUsers()
      .then((res) => {
        setUserList(res.data)
      })
      .catch((err) => showText(err.response.data.message))
  }

  const deleteUser = (id) => {
    userService
      .deleteUser(id)
      .then((res) => console.info(res))
      .catch((err) => showText(err.response.data.message))
    refreshUsers()
  }

  const refreshReviews = () => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        setReviewsList(res.data)
      })
      .catch((err) => showText(err.response.data.message))
  }

  const deleteReview = (id) => {
    reviewsService
      .deleteReview(id)
      .then((res) => console.info(res))
      .then(() => refreshReviews())
      .catch((err) => showText(err.response.data.message))
  }

  useEffect(() => {
    refreshUsers()
    refreshReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        {usersList.map((elem) => (
          <ProfileCard
            deleteUser={deleteUser}
            userDetails={elem}
            key={elem._id}
          />
        ))}
      </div>
      <div className="reviewslist-card">
        {reviewsList.map((elem) => (
          <Review deleteReview={deleteReview} info={elem} key={elem._id} />
        ))}
      </div>
    </>
  )
}

export default AdminPanel
