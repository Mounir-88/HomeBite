import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // ✅ add this line
import ProductCard from '../ProductCard';

const sampleProduct = {
  id: 1,
  name: "Burger Deluxe",
  price: 5.99,
  image: "test.jpg",
  description: "Test Description"
};

test('renders product name', () => {
  render(
    <MemoryRouter>
      <ProductCard product={sampleProduct} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Burger Deluxe/i)).toBeInTheDocument();
});
