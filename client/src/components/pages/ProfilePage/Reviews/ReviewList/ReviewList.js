import React from 'react'
import Review from './Review/Review'

const ReviewList = (props) => {
  const reviews = props.reviews
  const refreshReviews = props.refreshReviews
  const deleteReview = props.deleteReview

  return (
    <div className="reviewslist-card">
      {reviews?.map((elm) => (
        <Review
          info={elm}
          key={elm._id}
          refreshReviews={refreshReviews}
          deleteReview={deleteReview}
        />
      ))}
    </div>
  )
}

export default ReviewList
