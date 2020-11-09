const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const moment = require("moment");
const uniqueValidator = require("mongoose-unique-validator");
const isAlpha = require("validator/lib/isAlpha");
const isAlphanumeric = require("validator/lib/isAlphanumeric");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;
const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Is Required"],
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, ["en-US"]);
      },
      message: function () {
        return "invalide  Name Format";
      },
    },
  },
  
  email: {
    type: String,
    required: [true, "Email Is Required"],
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return "invalide Last Name";
      },
    },
  },
  mobile: {
    type: Number,
    required: [true, "Mobile No Is Required"],
    
  },   


  address: {
    type: String,
    required: [true, "Address Is Required"],
    
    
  },  
  adharcard: {
    type: Number,
    required: [true, "Adhar Card No Is Required"],
   
  }, 
  pancard: {
    type: String,
    required: [true, "Pan Card No Is Required"],
   
    validate: {
        validator: function (value) {
          return validator.isAlphanumeric(value, ["en-US"]);
        },
        message: function () {
          return "invalide  Pan Card No";
        },
      },
  },
  adharcard_path: {
    type: String,
    required: [true, "path Is Required"],
    
  },
pancard_path: {
    type: String,
    required: [true, "path Is Required"],
  },
  bankName: {
    type: String,
    required: [true, "Bank Name Is Required"],
    
    
  },  
  branchAddress: {
    type: String,
    required: [true, "Branch Address Is Required"],
    
    
  }, 
  accountNo: {
    type: Number,
    required: [true, "Account No Is Required"],
    
  }, 
  ifsc_code: {
    type: String,
    required: [true, "IFSC Code Is Required"],
   
    validate: {
        validator: function (value) {
          return validator.isAlphanumeric(value, ["en-US"]);
        },
        message: function () {
          return "invalide IFSC Code No";
        },
      },
  }, 
  upi_id: {
    type: Number,
    required: [true, "UPI ID Is Required"],
   
  }, 
  upi_mobile: {
    type: Number,
    required: [true, "UPI Mobile No Is Required"],
    
  }, 
  nomineeName: {
    type: String,
    required: [true, "Nominee Name Is Required"],
    
    
  },
     relation: {
    type: String,
    required: [true, " Relation Is Required"],
    
    
  },  
  nominee_adharcard: {
    type: Number,
    required: [true, " Nominee Adhar Card No Is Required"],
   
  }, 
 nominee_adharcard_path: {
    type: String,
    required: [true, "path Is Required"],
    
  },
  tds_path: {
    type: String,
    required: [true, "path Is Required"],
    
  },
  agreement_path: {
    type: String,
    required: [true, "path Is Required"],
    
  },
  date: {
    type: String,
    default: () => moment().startOf('hour').fromNow(),
  },
  place: {
    type: String,
    required: [true, " Place Is Required"],
    
    
  },  
  userName: {
    type: String,
    required: [true, "UserName Is Required"],
    unique: true,
    sparse: true,
    validate: {
      validator: function (value) {
        return validator.isAlphanumeric(value, ["en-US"]);
      },
      message: function () {
        return "invalide  userName";
      },
    },
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: 8,
    maxlength: 120,
    // validate: {
    //   validator: function (value) {
    //     return validator.trim() && validator.isAlphanumeric(value, ["en-US"]);
    //   },
    //   message: function () {
    //     return "invalide Last Name";
    //   },
    // },
  },
  confirmPassword: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: 8,
    maxlength: 120,
    // validate: {
    //   validator: function (value) {
    //     return validator.trim() && validator.isAlphanumeric(value, ["en-US"]);
    //   },
    //   message: function () {
    //     return "invalide Last Name";
    //   },
    // },
  },
  roles: {
    type: [{
        type: String,
        enum: ['user', 'admin','superAdmin']
    }],
    default: ['user']
},
status: {
    type: [{
        type: String,
        enum: ['enable', 'disable','delete']
    }],
    default: ['enable']
},
admin_id:{
  type: Schema.Types.ObjectId,
     ref:'User',
     required: true,

},
  
});

clientSchema.plugin(uniqueValidator);

clientSchema.pre("save", function (next) {
  const user = this;
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt).then((encryptpassword) => {
      user.password = encryptpassword;
      next();
    });
  });
});



const Client = mongoose.model("user", clientSchema);

module.exports = Client;



