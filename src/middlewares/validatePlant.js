const validatePlant = (req, res, next) => {
  const { name, species, wateringIntervalDays } = req.body;
  
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }
  if (!species || typeof species !== 'string' || species.trim().length === 0) {
    return res.status(400).json({ error: 'Species is required and must be a non-empty string' });
  }
  if (wateringIntervalDays === undefined || typeof wateringIntervalDays !== 'number' || wateringIntervalDays <= 0) {
    return res.status(400).json({ error: 'wateringIntervalDays is required and must be a positive number' });
  }
  
  next();
};

module.exports = validatePlant;