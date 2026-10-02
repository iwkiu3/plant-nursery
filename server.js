require('dotenv').config();
const app = require('./src/app');
const seed = require('./src/seed');

const PORT = process.env.PORT || 3000;
// ВАЖНО: Замени 10 на свой порядковый номер в списке группы!
const N = parseInt(process.env.STUDENT_NUMBER) || 10; 

seed(N);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Seeded with ${N} plants.`);
});