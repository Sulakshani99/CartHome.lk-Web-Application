const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// -buyer
// -vehicle
// -quantity
// -total price
// -date
// -order status
const orderSchema = new Schema({
  
      buyer:{
        type: Schema.Types.ObjectId,
        ref: 'Buyer',
        required:true
      },
      vehicle:{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
      },
      file:{
        type: String,
        required:true
      },
      description:{
        type: String,
        required:false
      },
      address:{
        type: String,
        required:true
      },
      quantity:{
        type: Number,
        required:true
      },
      totalprice:{
        type: Number,
        required:true
      },
      date:{
        type: Date,
        required:true
      },
      orderStatus:{
        type: String,
        required:true
      }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;