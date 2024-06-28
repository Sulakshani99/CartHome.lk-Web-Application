const BuyerModel = require('../model/buyer')
const createHttpError = require('http-errors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {

    const username = req.body.username
    const password = req.body.password

    try {
        if (!username || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const buyer = await BuyerModel.findOne({username: username}).exec();

        if (!buyer) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, buyer.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }
        const user = await BuyerModel.findOne({ username: username}).exec();

        const token = jwt.sign(
            { 
                user_id: user._id,
                username: user.username,
            }, 
            process.env.JWT_TOKEN_KEY, 
            { 
                expiresIn: '4h',
            }
            )

            user.token = token;

            const result = await user.save();

            //create new response object with only request
            const response = {
                id: result._id,
                name: result.name,
                username: result.username,
                contactnumbers: result.contactnumbers,
                token: result.token,
                userType: "buyer"
            }

            console.log(response);

        res.status(200).send(response);

    } catch (error) {
        next(error)
    }
}


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
            
            const isUserAvailable = await BuyerModel.findOne({ emailaddress: emailaddress }).exec();
            if(isUserAvailable){
                throw createHttpError(400,'User already exists')
            }
    
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const buyer = new BuyerModel({
                fullname: fullname,
                emailaddress: emailaddress,
                contactnumbers: contactnumbers,
                location: location,
                username: username,
                password: hashedPassword
            })
    
            const result = await buyer.save();
    
            res.status(201).send(result);
    
        } catch (error) {
            next(error)
        }
    
}