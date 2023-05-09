const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userComplaints = mongoose.Schema(
  {
    leaveTitle: {
      type: String,
      required: [true, 'Please add a Title'],
    },
    leaveBody: {
      type: String,
      required: [true, 'Please add a body'],
    },
    adminResponse: {
      type: String,
    },
    userId: {
      type: String,
      // type: Schema.Types.ObjectId, ref: 'AllUsers',
      required: [true, 'Please add a user ID']
    },
    date:{
      type: String
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('userLeave', userComplaints)
