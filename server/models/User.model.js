const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['USER', 'TEACHER', 'GOD'],
      default: 'USER',
    },
    name: {
      type: String,
      default: 'New user',
    },
    image: String
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
