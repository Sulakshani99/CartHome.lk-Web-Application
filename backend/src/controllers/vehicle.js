const createHttpError = require('http-errors')
const mongoose = require('mongoose');
const VehicleModel = require('../model/vehicle');

exports.create = async (req, res, next) => {
      const {
        vehicle_name,
        contactnumbers,
        price_Rs,
        get_leasing,
        make,
        model,
        YOM,
        mileage_km,
        gear,
        fuel_type,
        options,
        engine_cc
      } = req.body;
      try {
        const { image } = req.files;
        if(!image) {
            throw createHttpError(404, "Image not found")
        };
        if(!image.mimetype.startsWith('image')){
            throw createHttpError(400, 'Only images are allowed');
        }
        let filepath = __dirname + '../../../public/vehicles/' + image.name
        image.mv(filepath);

        let filepathtoUpload = '/public/vehicles/' + image.name

        if(!vehicle_name || !contactnumbers || !price_Rs || !get_leasing || !make || !model || !YOM || !mileage_km
            || !gear || !fuel_type || !options || !engine_cc ){
                throw createHttpError(400, 'Please provide all the required fields');
        }

        const vehicle = new VehicleModel({
            vehicle_name,
            // image: filepathtoUpload,
            contactnumbers,
            price_Rs,
            get_leasing,
            make,
            model,
            YOM,
            mileage_km,
            gear,
            fuel_type,
            options,
            image:filepathtoUpload,
            engine_cc,
        });

        const result = await vehicle.save();

        res.status(201).send(result);


      } catch (error) {
           next(error)
      }
}

exports.update = async (req, res, next) => {

    const vehicleId = req.params.id;

    const {
        vehicle_name,
        contactnumbers,
        price_Rs,
        get_leasing,
        make,
        model,
        YOM,
        mileage_km,
        gear,
        fuel_type,
        options,
        engine_cc
    } = req.body;

    try {
        
        if (!mongoose.isValidObjectId(vehicleId)){
            throw createHttpError(400, "Invalid Id")
        }
        if (!vehicle_name || !contactnumbers || !price_Rs || !get_leasing || !make || !model || !YOM || !mileage_km
            || !gear || !fuel_type || !options || !engine_cc ) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        // const {image} = req.files;
        // let filepath
        // let filepathUpload

        // if (image) {
        //     if (!image.mimetype.startWith('image')) {
        //         throw createHttpError(400, 'Only images are allowed')
        //     }
        //     let filepath = __dirname + '../../../public/vehicles/' + image.vehicle_name
        //     image.mv(filepath);

        //     let filepathtoUpload = '/public/vehicles/' + image.vehicle_name
        // };

        const vehicle = await VehicleModel.findById(vehicleId).exec();

        if(!vehicle) {
            throw createHttpError(404, 'Vehicle not found');
        }

        vehicle.vehicle_name = vehicle_name;
        vehicle.price_Rs = price_Rs;
        vehicle.make = make;
        vehicle.model = model;
        vehicle.YOM = YOM;
        vehicle.mileage_km = mileage_km;
        vehicle.gear = gear;
        vehicle.fuel_type = fuel_type;
        vehicle.options = options;
        vehicle.engine_cc= engine_cc
        // if (image) {
        //     vehicle.image = filepathtoUpload;
        // }

        const result = await vehicle.save();

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const vehicleId = req.params.id;
    //params localhost:3000/api/v1/vehicle/1234
    //query localhost:3000/api/v1/vehicle/?id=1234

    try {
        if (!mongoose.isValidObjectId(vehicleId)) {
            throw createHttpError(400, "Invalid Id")
        }
        const result = await VehicleModel.findByIdAndDelete(vehicleId).exec();

        if (!result) {
            throw createHttpError(404, 'Vehicle not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    
    try {
        const result = await VehicleModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const Id = req.params.id;

    try {
        if(!mongoose.isValidObjectId(Id)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await VehicleModel.findById(Id).exec();

        if(!result) {
            throw createHttpError(404, 'Vehicle not found');
        }

        res.status(200).send(result);

    } catch (error) {
        
    }
}

exports.search = async (req, res, next) => {
    const query = req.quert.q;

    try {
        if (!query) {
            throw createHttpError(400, "Please provide a search query")
        }

        const result = await VehicleModel.find({vehicle_name: { $regex: query, $options: 'i'} }).exec();

        if (!result) {
            throw createHttpError(404,'Vehicle not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next (error)
    }
}
