import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let AlloySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ratio: {
    type: Number
  }
});

module.exports = mongoose.model('Alloy', AlloySchema);