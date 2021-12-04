const { Schema, model } = require('mongoose')

const appointmentSchema = new Schema(
  {
    description: String,
    type: {
      type: String,
      enum: ['YOGA', 'TAICHI', 'MEDITATION'],
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    matchedActivity: { type: Schema.Types.ObjectId, ref: 'Activity' },
  },
  {
    timestamps: true,
  }
)

const Appointment = model('Appointment', appointmentSchema)

module.exports = Appointment
