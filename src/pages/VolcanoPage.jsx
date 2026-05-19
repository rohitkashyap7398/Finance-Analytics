import React from 'react';
import { Mic, User, Plus, ArrowRight, ChevronDown, Heart, ChevronUp, Home as HomeIcon } from 'lucide-react';
import './volcano.css';

const VolcanoPage = () => {
  return (
    <div className="v-container">
      <div className="v-wrapper">
        
        {/* Topbar */}
        <header className="v-topbar">
          <div className="v-search-bar">
            <span>Search ...............</span>
            <div className="v-search-icons">
              <Mic size={18} />
              <User size={18} />
            </div>
          </div>
          <div className="v-top-collab">C O L L A B O R A T I O N</div>
        </header>

        {/* Hero Section */}
        <section className="v-hero-section">
          <div className="v-hero-main-panel">
            <button className="v-icon-btn v-plus-btn"><Plus size={24} /></button>
            <p className="v-subtitle">INTRO TO VOLCANOES / EARTH SCIENCE</p>
            <div className="v-title-wrapper">
              <h1 className="v-main-title">VOLCANOES</h1>
              <span className="v-badge-slanted">EARTH SCIENCE</span>
            </div>
            <div className="v-logout-wrapper">
              <button className="v-pill-btn v-logout-btn">LOGOUT</button>
            </div>
            <div className="v-info-tab">INFO <ChevronDown size={16} style={{ marginTop: '4px' }} /></div>
          </div>

          <div className="v-hero-side-panel">
            <div className="v-get-started">Get Started</div>
            <h2>What is a volcano?</h2>
            <p>A volcano, is a kumg lamo onge usually vaulamtar imymor sant mick-termal anrqued egital volcanoes. Volcano sanesmate tiplcaness vanos early tap. example, and deryon.</p>
            <button className="v-square-btn v-btn-bottom-right"><ArrowRight size={20} /></button>
          </div>

          <div className="v-hero-actions">
            <button className="v-pill-btn v-example-btn">Example</button>
            <button className="v-circle-btn"><Heart size={16} fill="currentColor" /></button>
            <button className="v-circle-btn"><Heart size={16} fill="currentColor" /></button>
          </div>
        </section>

        {/* Middle Section */}
        <section className="v-middle-section">
          <div className="v-middle-main-panel">
            <button className="v-pill-btn v-diff-btn">DIFFERENCE</button>
            <p>Berboda dengan aeltcanoos. Srum that seremly murge-shaped volcanoet performally voleatr adolamscan, itnib quarts: siten or earlo per ted ef tamimulandon mibas, pit etc) ( yypetally minimitruk alternati rsan.</p>
            <a href="#" className="v-link">Example volcanoes &gt;</a>
            
            <div className="v-info-tab-bottom">NEXT</div>
          </div>

          <div className="v-middle-side-panel">
            <div className="v-panel-indicator"></div>
            <h2>Cone</h2>
            <p>Cone shaped volcanoe, usually aften ano scapt. Shiialcattern, an example of Sunge Crater Volcano in Arizona, in Arizona.</p>
            <br />
            <a href="#" className="v-link-dark">Example volcanoes &gt;</a>
            <button className="v-square-btn v-btn-bottom-right"><ArrowRight size={20} /></button>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="v-gallery-section">
          <div className="v-gallery-img">
            <img src="https://i.pinimg.com/736x/fa/21/80/fa2180267f738df9efe820427cfe550b.jpg"  alt="Volcano" />
            <button className="v-square-btn-light v-btn-bottom-right"><ArrowRight size={20} /></button>
          </div>
          <div className="v-gallery-img">
            <img src="https://i.pinimg.com/736x/b7/cc/00/b7cc00400f27016ef1bd504bb2e0af59.jpg" alt="Volcano 2" />
            <button className="v-square-btn-light v-btn-bottom-right"><ArrowRight size={20} /></button>
          </div>
          <div className="v-gallery-controls">
            <button className="v-pill-btn-small">PAGE</button>
            <button className="v-pill-btn-small v-active">GALLERY</button>
            <button className="v-scroll-btn">SCROLL <ChevronUp size={16}/></button>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="v-bottom-section">
          <div className="v-logo-circle">
            <span>ORL</span>
            <span className="v-logo-sub">deco</span>
          </div>
          
          <div className="v-bottom-panel">
            <div className="v-bottom-tabs">
              <span className="v-tab active">Its Type Variation</span>
              <span className="v-tab">Volcano</span>
              <span className="v-tab">Cone</span>
            </div>
            
            <div className="v-bottom-gallery">
              <div className="v-bottom-img">
                <img src="https://i.pinimg.com/1200x/18/8c/24/188c2478b306943c177ae5b4c49a1274.jpg" alt="Thumb" />
                <button className="v-square-btn-light v-btn-bottom-right"><ArrowRight size={16} /></button>
              </div>
              <div className="v-bottom-img">
                <img src="https://i.pinimg.com/736x/2e/fe/e9/2efee9c38825f23df63d16751038d721.jpg" alt="Thumb" />
                <button className="v-square-btn-light v-btn-bottom-right"><ArrowRight size={16} /></button>
              </div>
              <div className="v-bottom-img">
                <img src="https://i.pinimg.com/736x/c7/ae/5d/c7ae5dc48595c24507ccf53e68051c74.jpg" alt="Thumb" />
                <button className="v-square-btn-light v-btn-bottom-right"><ArrowRight size={16} /></button>
              </div>
            </div>
            
            <div className="v-bottom-nav">
              <span>SPECIAL COLLABORATION</span>
              <div className="v-home-icon"><HomeIcon size={24} /></div>
              <span>ABOUT VOLCANOES</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VolcanoPage;
