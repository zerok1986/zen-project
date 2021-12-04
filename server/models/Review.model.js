const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    ref: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    date: { type: Date, default: Date.now() },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  },
  { timestamps: true }
)
const Review = model('Review', reviewSchema)
module.exports = Review
