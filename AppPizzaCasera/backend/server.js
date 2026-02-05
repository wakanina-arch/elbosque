import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001;

app.use(cors());

const pizzas = [
  { nombre: 'Margherita', precio: 120, ingredientes: 'Queso mozzarella, tomate, albahaca' },
  { nombre: 'Pepperoni', precio: 140, ingredientes: 'Queso mozzarella, pepperoni, tomate' },
  { nombre: 'Cuatro Quesos', precio: 160, ingredientes: 'Mozzarella, gorgonzola, parmesano, ricotta' },
  { nombre: 'Champiñones y Aceitunas', precio: 150, ingredientes: 'Champiñones, aceitunas negras, mozzarella, tomate' }
];

app.get('/api/pizzas', (req, res) => {
  res.json(pizzas);
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
