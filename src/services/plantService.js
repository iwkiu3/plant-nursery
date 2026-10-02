const plants = require('./store');

class PlantService {
  getAll(filter = {}) {
    let result = plants;
    if (filter.species) {
      result = result.filter(p => p.species.toLowerCase() === filter.species.toLowerCase());
    }
    return result;
  }

  getById(id) {
    return plants.find(p => p.id === id);
  }

  create(data) {
    const id = (plants.length > 0 ? Math.max(...plants.map(p => Number(p.id))) + 1 : 1).toString();
    const now = new Date();
    const nextWatering = new Date(now.getTime() + data.wateringIntervalDays * 24 * 60 * 60 * 1000);
    
    const newPlant = {
      id,
      ...data,
      createdAt: now.toISOString(),
      nextWatering: nextWatering.toISOString()
    };
    plants.push(newPlant);
    return newPlant;
  }

  update(id, data) {
    const index = plants.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    const nextWatering = new Date(Date.now() + data.wateringIntervalDays * 24 * 60 * 60 * 1000);
    
    const updatedPlant = {
      id,
      ...data,
      createdAt: plants[index].createdAt, 
      nextWatering: nextWatering.toISOString()
    };
    plants[index] = updatedPlant;
    return updatedPlant;
  }

  patch(id, data) {
    const index = plants.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    const updatedData = { ...plants[index], ...data };
    
    let nextWatering = plants[index].nextWatering;
    if (data.wateringIntervalDays !== undefined) {
      nextWatering = new Date(Date.now() + updatedData.wateringIntervalDays * 24 * 60 * 60 * 1000).toISOString();
    }
    
    plants[index] = { ...updatedData, nextWatering };
    return plants[index];
  }

  delete(id) {
    const index = plants.findIndex(p => p.id === id);
    if (index === -1) return false;
    plants.splice(index, 1);
    return true;
  }
}

module.exports = new PlantService();