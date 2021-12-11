import React, { useState, useEffect } from 'react'
import ReviewsService from '../../../../../services/reviews.service'
import Review from './Review/Review'

const reviewsService = new ReviewsService()

const ReviewList = (props) => {
  const [reviewsInfo, setReviewsInfo] = useState([])
  const id = props.teacherId

  useEffect(() => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        const filteredReviews = res.data.filter((elm) => elm.ref._id === id)
        setReviewsInfo(filteredReviews)
      })
      .catch((err) => console.error(err))
  }, [reviewsInfo])

  const reviews = reviewsInfo

  return (
    <div className="reviewslist-card">
      {reviews.map((elm) => (
        <Review info={elm} key={elm._id} />
      ))}
    </div>
  )
}

export default ReviewList
