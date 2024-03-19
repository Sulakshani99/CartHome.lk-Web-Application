const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// -fullname
// -emailaddress
// -contactnumbers
// -location
// -username
// -password
const buyerSchema = new Schema({
      fullname:{
        type: String,
        required:true
      },
      emailaddress:{
        type: String,
        required: true
      },
      contactnumbers:{
        type: Number,
        required:true
      },
      location:{
        type: String,
        required:true
      },
      username:{
        type: String,
        required:true
      },
      password:{
        type: String,
        required:true
      },
      token: {
        type: String,
        required: false
      }
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;