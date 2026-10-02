const express = require('express');
const plantRoutes = require('./routes/plantRoutes');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

app.use(express.json()); // Парсер JSON тела запроса

app.use('/plants', plantRoutes);

// Сначала обработчик несуществующих маршрутов
app.use(notFound);
// В самом конце глобальный обработчик ошибок
app.use(errorHandler);

module.exports = app;