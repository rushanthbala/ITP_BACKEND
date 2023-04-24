const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    type: {
      type: String,
      required: [true, 'Please add a USER ROLE'],
    },
    number: {
      type: String,
      required: [true, 'Please add an email'],
    },
    status: {
      type: Boolean,
      required: [true, 'Please add a password'],
    },
    driver: {
        type: String,
        required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('schedule', userSchema)
