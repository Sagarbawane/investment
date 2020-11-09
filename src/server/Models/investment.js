const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const moment = require("moment");
const uniqueValidator = require("mongoose-unique-validator");
const isAlpha = require("validator/lib/isAlpha");
const isAlphanumeric = require("validator/lib/isAlphanumeric");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;
const investmentSchema = new  Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
  capital_amount: {
    type: Number,
    required: [true, "Capital Amount Is Required"],
    
  },   


  return_interest_percentage: {
    type: Number,
    required: [true, "Return Interest Percentage Is Required"],
    
    
  },  
  
  
  
 
  lock_in_period: {
    type: Number,
    required:true
    
  },
  
  
  date_of_investment: {
    type: Date,
    default:moment().format('LL')
  },
  status: {
    type: [{
        type: String,
        enum: ['enable', 'disable','delete']
    }],
    default: ['enable']
},
 
  
admin_id:{
     type: Schema.ObjectId, auto: true 
},
  
});


const Investment = mongoose.model("investment", investmentSchema);

module.exports = Investment;



