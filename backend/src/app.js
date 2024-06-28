require('dotenv').config()

const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const BuyerRouter = require('./routes/buyer')
const SellerRouter = require('./routes/seller')
const VehicleRouter = require('./routes/vehicle')
const OrderRouter = require('./routes/order')
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use('/public/vehicles', express.static('public/vehicles'))
//cors
const cors = require('cors')
app.use(cors())

app.use(express.json())


app.use('/api/v1/buyers', BuyerRouter);
app.use('/api/v1/sellers', SellerRouter);
app.use('/api/v1/vehicles', VehicleRouter);
app.use('/api/v1/orders', OrderRouter);

// Root route to display "Backend connected"
app.get('/', (req, res) => {
    res.send('Backend connected to localhost now testing .');
  });

app.use((err,req,res,next) => {
    if(createHttpError.isHttpError(err)){
        res.status(err.status).send({message: err.message})
    }else{
        res.status(500).send({message: err.message})
    }
    // error unknown
    res.status(500).send({message: "Error Unknown"})
})

module.exports = app;
    


