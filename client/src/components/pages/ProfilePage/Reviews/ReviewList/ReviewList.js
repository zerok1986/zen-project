import React, { useState } from 'react'
import Review from './Review/Review'

const ReviewList = (props) => {
  const reviews = props.reviews

  return (
    <div className="reviewslist-card">
      {reviews?.map((elm) => (
        <Review info={elm} key={elm._id} />
      ))}
    </div>
  )
}

export default ReviewList
