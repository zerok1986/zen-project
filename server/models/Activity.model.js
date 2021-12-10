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
    assistants: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    default : []
    }
        

  },

  { timestamps: true }
)
const Activity = model('Activity', activitySchema)
module.exports = Activity
