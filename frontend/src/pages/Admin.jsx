import { useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [restaurant, setRestaurant] = useState('');
  const [shop, setShop] = useState('');
  const [product, setProduct] = useState('');

  const handleAddRestaurant = () => {
    axios.post('http://localhost:4000/api/admin/restaurants', { name: restaurant })
         .then(() => alert('Restaurant added!'));
    setRestaurant('');
  };

  const handleAddShop = () => {
    axios.post('http://localhost:4000/api/admin/shops', { name: shop })
         .then(() => alert('Shop added!'));
    setShop('');
  };

  const handleAddProduct = () => {
    axios.post('http://localhost:4000/api/admin/products', { name: product })
         .then(() => alert('Product added!'));
    setProduct('');
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>

      <div className="admin-section">
        <h3>Add Restaurant</h3>
        <input value={restaurant} onChange={e => setRestaurant(e.target.value)} placeholder="Restaurant Name" />
        <button onClick={handleAddRestaurant}>Add Restaurant</button>
      </div>

      <div className="admin-section">
        <h3>Add Shop</h3>
        <input value={shop} onChange={e => setShop(e.target.value)} placeholder="Shop Name" />
        <button onClick={handleAddShop}>Add Shop</button>
      </div>

      <div className="admin-section">
        <h3>Add Product</h3>
        <input value={product} onChange={e => setProduct(e.target.value)} placeholder="Product Name" />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default Admin;
