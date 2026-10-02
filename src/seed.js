const plants = require('./services/store');

const seed = (n) => {
  for (let i = 1; i <= n; i++) {
    const interval = 3 + (i % 5); // Разные интервалы полива
    // Эмулируем, что растения были посажены в разные дни
    const createdAt = new Date(Date.now() - (n - i) * 24 * 60 * 60 * 1000); 
    const nextWatering = new Date(createdAt.getTime() + interval * 24 * 60 * 60 * 1000);
    
    plants.push({
      id: i.toString(),
      name: `Растение ${i}`,
      species: i % 2 === 0 ? 'Кактус' : 'Фикус',
      wateringIntervalDays: interval,
      createdAt: createdAt.toISOString(),
      nextWatering: nextWatering.toISOString()
    });
  }
};

module.exports = seed;