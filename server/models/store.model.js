/*const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
},{timestamps: true}
);

// Update the updatedAt field before saving
sampleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Sample', sampleSchema);
*/

const mongoose = require ('mongoose')
const storeSchema = new mongoose.Schema ({
  store_location:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  currency:{
    type:String,
    required:true,
    uppercase:true,
    trim:true
  },
  tax_percentage:{
    type:Number,
    required:true
  },
  premium_items:[String]
}, {timestamps:true});
module.exports = mongoose.model('Store', storeSchema);