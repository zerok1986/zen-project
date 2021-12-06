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
    teacher: { type: Schema.Types.ObjectId, ref: 'User' },
    // sacar los asistentes del owner de cada appointment de esa actividad
  },

  { timestamps: true }
)
const Activity = model('Review', activitySchema)
module.exports = Activity
