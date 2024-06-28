const createHttpError = require('http-errors')
const bcrypt = require('bcryptjs');
const OrderModel = require('../model/order');
const Order = require('../model/order');
const { default: mongoose } = require('mongoose');

exports.create = async (req, res, next) => {

    const {
        buyer,
        vehicle,
        quantity,
        description,
        address
    } = req.body;
    try {
        const { pdf } = req.files;
        if(!pdf) {
            throw createHttpError(404, "Pdf not found")
        };
        let filepath = __dirname + '../../../public/pdfs/' + pdf.vehicle_name
        pdf.mv(filepath);

        let filepathUpload = '/public/pdfs/' + pdf.vehicle_name

        if (!buyer || !vehicle || !quantity || !address ) {
            throw createHttpError (400, 'Please provide all the required fields');
        }

        const buyerId = mongoose.Types.ObjectId(buyer);
        const vehicleId = mongoose.Types.ObjectId(vehicle);

        const order = new OrderModel ({
            buyer: buyerId,
            vehicle: vehicleId,
            quantity,
            totalprice: quantity * vehicle.price,
            date: Date.now(),
            orderStatus: 'pending',
            file: filepathtoUpload,
            description,
            address
        });

        const result = await order.save();

        res.status(201).send(result);

    } catch (error) {
        next(error)
    }

}

exports.getOrderBySeller = async (req, res, next) => {

    const sellerId = req.params.id;

    try {
        const orders = await OrderModel.find({ seller: sellerId }).populate('buyer').populate('vehicle').exec();
        res.send(orders);

    } catch (error) {
        next(error)
    }

}

exports.getOrderByBuyer = async (req,res, next) => {

    const buyerId = req.params.id;

    try {
        const orders = await OrderModel.find({ buyer: buyerId }).populate('buyer').populate('vehicle').exec();
        res.send(orders);

    } catch (error) {
        next(error)
    }

}