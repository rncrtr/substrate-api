import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let VariableSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  contentType: {
    type: String
  },
  isSecret: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Variable', VariableSchema);