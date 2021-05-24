const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: 'string',
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
