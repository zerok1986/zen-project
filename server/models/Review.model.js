const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ref: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: {
      type: String,
      required: true,
    },
    date: { type: Date, default: Date.now },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  { timestamps: true }
)
const Review = model('Review', reviewSchema)
module.exports = Review
