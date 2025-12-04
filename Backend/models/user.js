const mongoose = require('mongoose');
const list = require('./list');


const userSchema = new mongoose.Schema({
 username: {
    type: String,
    
  },
    email: {
      type: String,
      required: true,
    },

    
    password: {
      type: String,
      required: true,
    },
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

module.exports = mongoose.model('User', userSchema);