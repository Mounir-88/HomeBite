import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to HomeBite</h1>
        <p>Your gateway to delicious food, groceries, and more!</p>
        <Link to="/products" className="cta-button">Browse Products</Link>
      </section>

      {/* Quick Actions / Categories */}
      <section className="categories">
        <h2>Quick Access</h2>
        <div className="category-links">
          <Link to="/restaurants" className="category-card">
            Restaurants
          </Link>
          <Link to="/products" className="category-card">
            Products
          </Link>
          <Link to="/shops" className="category-card">
            Shops
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
