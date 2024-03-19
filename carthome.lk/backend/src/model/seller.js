const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// -fullname
// -emailaddress
// -contactnumbers
// -location
// -username
// -password
// -individual/dealership
// -if dealership, dealer license number
const sellerSchema = new Schema({
      fullname:{
        type: String,
        required:true
      },
      emailaddress:{
        type: String,
        required: true
      },
      contactnumbers:{
        type: String,
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

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;