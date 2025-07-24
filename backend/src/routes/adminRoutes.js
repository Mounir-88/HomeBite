import express from 'express';

const router = express.Router();

// Example: Add Restaurant
router.post('/restaurants', (req, res) => {
  const { name } = req.body;
  console.log('New restaurant:', name);
  res.json({ message: `Restaurant "${name}" added (simulated).` });
});

// Example: Add Shop
router.post('/shops', (req, res) => {
  const { name } = req.body;
  console.log('New shop:', name);
  res.json({ message: `Shop "${name}" added (simulated).` });
});

// Example: Add Product
router.post('/products', (req, res) => {
  const { name } = req.body;
  console.log('New product:', name);
  res.json({ message: `Product "${name}" added (simulated).` });
});

export default router;
