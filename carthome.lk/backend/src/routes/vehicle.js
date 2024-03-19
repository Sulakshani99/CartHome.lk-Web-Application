const express = require('express');
const VehicleController = require('../controllers/vehicle')

const router = express.Router()

const verifyToken = require('../middlewares/verifyToken')

router.post('/', VehicleController.create);
router.put('/:id', VehicleController.update)
router.delete('/:id', VehicleController.delete)
router.get('/all', VehicleController.getAll)
router.get('/:id', VehicleController.getOne)
router.get('searchResults', VehicleController.search)




module.exports = router;