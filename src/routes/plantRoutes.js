const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const validatePlant = require('../middlewares/validatePlant');

router.get('/', plantController.getPlants);
router.get('/:id', plantController.getPlantById);
router.post('/', validatePlant, plantController.createPlant);
router.put('/:id', validatePlant, plantController.updatePlant);
router.patch('/:id', plantController.patchPlant);
router.delete('/:id', plantController.deletePlant);

module.exports = router;