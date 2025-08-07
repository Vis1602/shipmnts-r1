/*
{
    "store_location": "Delhi",
    "valid_from": "2025-08-01",
    "valid_to": "2025-08-31",
    "items": [
      {
        "category": "veggie",
        "name": "Tomato",
        "half_price": 14,
        "full_price": 27,
        "extra_charge": 15
      }
    ]
  }
*/

const mongoose = require ('mongoose')
const Store = require('./store.model.js')
const itemSchema = new mongoose.Schema({
    category:{
        type:String
    },
    name:{
        type:String
    },
    half_price:{
        type:Number
    },
    full_price:{
        type:Number
    }, 
    extra_charge:{
        type:Number
    }


})
const planSchema = new mongoose.Schema ({
    store_location:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store'
    },
    valid_from:{
        type:Date,
    },
    valid_to:{
        type:Date,
    },
    items:[itemSchema]

}, {timestamps:true});

module.exports = mongoose.model('Plan', planSchema);
  
  