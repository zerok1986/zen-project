const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    ref: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    date: { type: Date, default: Date.now },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
)
const Review = model('Review', reviewSchema)
module.exports = Review
