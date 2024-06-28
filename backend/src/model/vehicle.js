const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// -vehicle_name
// -image
// -contactnumbers
// -price_Rs
// -get_leasing
// -make
// -model
// -YOM
// -mileage_km
// -gear
// -fuel_type
// -options
// -engine_cc
const vehicleSchema = new Schema({
      vehicle_name:{
        type: String,
        required:true
      },
      image:{
        type: String,
        required: false
      },
      contactnumbers:{
        type: String,
        required:true
      },
      price_Rs:{
        type: String,
        required:true
      },
      get_leasing:{
        type: String,
        required:true
      },
      make:{
        type: String,
        required: true
      },
      model:{
        type: String,
        required:true
      },
      YOM:{
        type: String,
        required:true
      },
      mileage_km:{
        type: String,
        required:true
      },
      gear:{
        type: String,
        required:true
      },
      fuel_type:{
        type: String,
        required:true
      },
      options:{
        type: String,
        required: true
      },
      engine_cc:{
        type: String,
        required:true
      },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;