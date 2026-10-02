const plantService = require('../services/plantService');

const getPlants = (req, res, next) => {
  try {
    const plants = plantService.getAll(req.query);
    res.status(200).json(plants);
  } catch (err) { next(err); }
};

const getPlantById = (req, res, next) => {
  try {
    const plant = plantService.getById(req.params.id);
    if (!plant) return res.status(404).json({ error: 'Plant not found' });
    res.status(200).json(plant);
  } catch (err) { next(err); }
};

const createPlant = (req, res, next) => {
  try {
    const newPlant = plantService.create(req.body);
    res.status(201).json(newPlant);
  } catch (err) { next(err); }
};

const updatePlant = (req, res, next) => {
  try {
    const updatedPlant = plantService.update(req.params.id, req.body);
    if (!updatedPlant) return res.status(404).json({ error: 'Plant not found' });
    res.status(200).json(updatedPlant);
  } catch (err) { next(err); }
};

const patchPlant = (req, res, next) => {
  try {
    const patchedPlant = plantService.patch(req.params.id, req.body);
    if (!patchedPlant) return res.status(404).json({ error: 'Plant not found' });
    res.status(200).json(patchedPlant);
  } catch (err) { next(err); }
};

const deletePlant = (req, res, next) => {
  try {
    const deleted = plantService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Plant not found' });
    res.status(204).send(); // 204 No Content
  } catch (err) { next(err); }
};

module.exports = {
  getPlants, getPlantById, createPlant, updatePlant, patchPlant, deletePlant
};