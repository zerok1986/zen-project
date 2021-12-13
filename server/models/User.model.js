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
      enum: ['ALUMNO', 'PROFESOR', 'GOD'],
      default: 'ALUMNO',
    },
    name: {
      type: String,
      default: 'Nuevo alumno',
    },
    image: {
      type: String,
      default:
        'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
    },
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
