const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'comment is required']
  },
  phone: {type:Schema.Types.ObjectId, ref:'Phone'}
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

module.exports = mongoose.model('Comment', commentSchema);
