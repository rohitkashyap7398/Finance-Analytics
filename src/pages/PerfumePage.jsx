import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import './perfume.css';

const PerfumePage = () => {
  const products = [
    { name: "Rosewood Bliss", price: "$50.0", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300" },
    { name: "Citrus Zest", price: "$90.0", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300" },
    { name: "Woodland Walk", price: "$70.0", img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=300" },
    { name: "Rosewood Bliss", price: "$80.0", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300" },
    { name: "Citrus Zest", price: "$70.0", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300" },
    { name: "Woodland Walk", price: "$100.0", img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=300" },
  ];

  return (
    <div className="p-container">
      <div className="p-wrapper">
        
        {/* Topbar */}
        <header className="p-topbar">
          <div className="p-logo">Perf</div>
          <nav className="p-nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Category</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav>
          <div className="p-actions">
            <div className="p-search">
              <Search size={16} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="p-cart-btn">
              <ShoppingCart size={16} /> Cart
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="p-hero">
          <div className="p-hero-left">
            <div className="p-hero-text-box">
              <h1 className="p-title-light">Fall in love with</h1>
              <h1 className="p-title-light">Our Signature</h1>
              <h1 className="p-title-green">Perfumes</h1>
            </div>
            <div className="p-hero-desc">
              <div className="p-desc-line"></div>
              <p>Discover the perfect fragrance for you with our wide selection of perfumes.</p>
            </div>
            <div className="p-hero-stats">
              <div>
                <h4>90+</h4>
                <span>Perfumes</span>
              </div>
              <div>
                <h4>15M+</h4>
                <span>Customers</span>
              </div>
            </div>
          </div>
          <div className="p-hero-right">
            <div className="p-hero-image-container">
              <img src="https://i.pinimg.com/1200x/a3/06/0b/a3060b1f70eeb175bc6e0341c7ffde72.jpg" alt="Perfume Model" />
            </div>
            <div className="p-shop-now-circle">
              <span>SHOP</span>
              <span>NOW!</span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="p-products-section">
          <h2 className="p-section-title">Shop Our Wide Selection of<br/>Scents</h2>
          
          <div className="p-product-grid">
            {products.map((p, index) => (
              <div className="p-product-card" key={index}>
                <div className="p-product-img-wrapper">
                  <img src={p.img} alt={p.name} />
                </div>
                <h3 className="p-product-name">{p.name}</h3>
                <div className="p-product-price">{p.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="p-reviews-section">
          <h2 className="p-reviews-title">Customer Reviews</h2>
        </section>

      </div>
    </div>
  );
};
export default PerfumePage;
