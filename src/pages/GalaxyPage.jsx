import React from 'react';
import { Search, Home, Grid, Settings, User, ArrowRight, ArrowDown, Plus } from 'lucide-react';
import './galaxy.css';

const GalaxyPage = () => {
  return (
    <div className="g-container">
      <div className="g-wrapper">
        
        {/* Topbar */}
        <header className="g-topbar">
          <div className="g-search-bar">
            <Search size={18} />
            <input type="text" placeholder="Galaksi itu apa sih?" />
          </div>
          <div className="g-logo-icon">Ik</div>
        </header>

        {/* Hero Section */}
        <section className="g-panel-main" style={{ zIndex: 1 }}>
          <div className="g-hero-section">
            <div className="g-hero-left">
              <div className="g-hero-subtitle">CHALLENGE UI X WEB DESIGN</div>
              <div className="g-hero-title-container">
                <h1 className="g-title-big">TENTANG</h1>
                <div className="g-title-cursive">Galaksi</div>
              </div>
              <div className="g-hero-bottom-text">ASKAR AKMIL DESIGN</div>
              <div className="g-hero-buttons">
                <button className="g-btn-outline">LOGIN</button>
                <button className="g-btn-solid">BUAT AKUN</button>
              </div>
            </div>

            <div className="g-hero-right">
              <img 
                src="https://i.pinimg.com/736x/00/6c/3e/006c3e34c92df8e7c38c0011d74f6c12.jpg" 
                alt="Astronaut" 
                className="g-floating-img-1" 
              />
              <div className="g-panel-dark">
                <h3>GALAKSI ADALAH ...</h3>
                <p>Kumpulan besar bintang, gas, dan debu yang terikat oleh gravitasi. Mereka bisa berbentuk spiral, elips, atau tak beraturan. Contoh terkenal adalah Galaksi Bima Sakti.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Row */}
        <div className="g-nav-row">
          <div className="g-nav-btn"><Home size={24} /></div>
          <div className="g-nav-btn"><Grid size={24} /></div>
          <div className="g-nav-btn"><Settings size={24} /></div>
          <div className="g-nav-btn"><User size={24} /></div>
        </div>

        {/* Middle Section */}
        <section className="g-panel-main g-middle-section">
          <div className="g-badge-top">PENJELASAN SINGKAT TENTANG GALAKSI</div>
          
          <img 
            src="https://i.pinimg.com/736x/00/6c/3e/006c3e34c92df8e7c38c0011d74f6c12.jpg" 
            alt="Saturn" 
            className="g-floating-img-2" 
          />
          
          <img 
            src="https://i.pinimg.com/1200x/c8/5e/0c/c85e0cfc1632cfbca869d4e3335ff601.jpg" 
            alt="Astronaut on rocket" 
            className="g-floating-img-3" 
          />

          <div className="g-chat-bubbles">
            <div className="g-panel-light g-bubble-left">
              <p>Galaksi biasanya dikelompokkan dalam gugus galaksi atau supergugus galaksi, yang merupakan struktur terbesar yang dikenal di alam semesta. Galaksi-galaksi ini dapat saling berinteraksi melalui gaya gravitasi, yang dapat menyebabkan pergeseran atau penggabungan galaksi.</p>
              <button className="g-btn-small"><ArrowRight size={16} /> Lanjutin uy...</button>
            </div>
            
            <div className="g-panel-light g-bubble-right">
              <button className="g-btn-small" style={{ marginBottom: '1rem' }}><ArrowRight size={16} /> Sampe sini aja.</button>
              <p>Galaksi biasanya dikelompokkan dalam gugus galaksi atau supergugus galaksi, yang merupakan struktur terbesar yang dikenal di alam semesta. Galaksi-galaksi ini dapat saling berinteraksi melalui gaya gravitasi, yang dapat menyebabkan pergeseran atau penggabungan galaksi.</p>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="g-scroll-wrapper">
          <div className="g-scroll-btn">
            GULIR <ArrowDown size={16} />
          </div>
        </div>

        {/* Bottom Section */}
        <section className="g-panel-main g-bottom-section">
          <img 
            src="https://i.pinimg.com/736x/52/5b/dd/525bdd3509ca14e79057a2f4290e4da8.jpg" 
            alt="Rocket" 
            className="g-floating-img-4" 
          />
          <div className="g-gallery-grid">
            <div className="g-gallery-left">
              <div className="g-img-card">
                <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80" alt="Black hole" />
                <div className="g-img-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="g-img-card">
                <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400&q=80" alt="Milky way" />
                <div className="g-img-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="g-img-card">
                <img src="https://i.pinimg.com/1200x/92/74/de/9274de3d29778cd5287d5314d3ad9c84.jpg" alt="Moon" />
                <div className="g-img-arrow"><ArrowRight size={16} /></div>
              </div>
              <div className="g-img-card">
                <img src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?w=400&q=80" alt="Comet" />
                <div className="g-img-arrow"><ArrowRight size={16} /></div>
              </div>
            </div>
            <div className="g-gallery-right">
              <div className="g-img-large">
                <img src="https://i.pinimg.com/1200x/55/9f/3d/559f3d8694d870b093bb72ac36290671.jpg" alt="Red galaxy" />
              </div>
              <div className="g-plus-btn">
                <Plus size={24} />
              </div>
            </div>
          </div>
          <div className="g-footer-text">
            CREATED BY MUHAMMAD FAJRI
          </div>
        </section>

      </div>
    </div>
  );
};

export default GalaxyPage;
