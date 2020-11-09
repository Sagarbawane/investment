const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const moment = require("moment");
const uniqueValidator = require("mongoose-unique-validator");
const isAlpha = require("validator/lib/isAlpha");
const isAlphanumeric = require("validator/lib/isAlphanumeric");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
  amount: {
    type: Number,
    required: [true, " Amount Is Required"],
    
  },   
  tds: {
    type: Number,
    required: [true, " TDS Is Required"],
    
  },   

  tds: {
    type: String,
    required: [true],
    
  },   
  
  
  
 
  
  
  date_of_transaction: {
    type: String,
    default: () => moment().format("LLLL"),
  },
  
 
  
admin_id:{
     type: Schema.ObjectId, auto: true 
},
  
});


const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction ;



