const createHttpError = require('http-errors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SellerModel = require('../model/seller');
require('dotenv').config()


exports.register = async (req, res, next) => {
    const fullname = req.body.fullname
    const emailaddress = req.body.emailaddress
    const contactnumbers = req.body.contactnumbers
    const location = req.body.location
    const username = req.body.username
    const password = req.body.password
    try {
        if(!fullname|| !emailaddress|| !contactnumbers|| !location|| !username|| !password){
            throw createHttpError(400, 'Missing required parameters')
        }
        
        const isSellerAvailable = await SellerModel.findOne({ emailaddress: emailaddress }).exec();
        if(isSellerAvailable){
            throw createHttpError(400,'Seller already exists')
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const seller = new SellerModel({
            fullname: fullname,
            emailaddress: emailaddress,
            contactnumbers: contactnumbers,
            location: location,
            username: username,
            password: hashedPassword
        })

        const result = await seller.save();

        res.status(201).send(result);

    } catch (error) {
        next(error)
    }

}

exports.login = async (req, res, next) => {

    const username = req.body.username
    const password = req.body.password

    try {
        if (!username || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const seller = await SellerModel.findOne({username: username}).exec();
        console.log(seller)
        if (!seller) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, seller.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }
        // const user = await BuyerModel.findOne({ username: username}).exec();
        console.log(process.env.JWT_TOKEN_KEY)
        

        const token = jwt.sign(
            { 
                user_id: seller._id,
                username: seller.username,
            }, 
            process.env.JWT_TOKEN_KEY, 
            { 
                expiresIn: '4h',
            }
            )

            seller.token = token;


            // seller.token = "hhhh";

            const result = await seller.save();

            console.log(result)
            //create new response object with only request
            const response = {
                id: result._id,
                name: result.name,
                username: result.username,
                // contactnumbers: result.contactnumbers,
                token: result.token,
                userType: "seller"
            }

            console.log(response);

        res.status(200).send(response);

    } catch (error) {
        next(error)
    }
}