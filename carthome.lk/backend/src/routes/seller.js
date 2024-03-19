const express = require('express');

const router = express.Router();
const SellerController = require('../controllers/seller');

router.post('/', SellerController.register);
router.post('/login', SellerController.login);

module.exports = router;