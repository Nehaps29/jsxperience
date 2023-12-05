const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
  plantName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  scientificName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  plantImage: {
    type: String,
    
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
 
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;
