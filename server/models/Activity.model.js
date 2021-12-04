const { Schema, model } = require('mongoose')

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['YOGA', 'TAICHI', 'MEDITATION'],
    },
    maxAssistants: Number,
    date: Date,
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
    price: Number,
    duration: Number,
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
    teacher: { type: Schema.Types.ObjectId, ref: 'User' },
    assistants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },

  { timestamps: true }
)
const Activity = model('Review', activitySchema)
module.exports = Activity
