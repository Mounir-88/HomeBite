import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div style={containerStyle}>
      <h1>Food Menu</h1>
      <div style={gridStyle}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

export default Home;
