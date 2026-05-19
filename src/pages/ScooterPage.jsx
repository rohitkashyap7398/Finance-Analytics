import React, { useState } from 'react';
import { ChevronLeft, ShoppingCart, Heart, Minus, Plus, Download } from 'lucide-react';
import './scooter.css';

const ScooterPage = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="scooter-container">
       <div className="scooter-wrapper">
          
          {/* Screen 1 */}
          <div className="scooter-screen">
             <div className="sc-header">
                <button className="sc-icon-btn"><ChevronLeft size={20} /></button>
                <button className="sc-icon-btn"><ShoppingCart size={20} /></button>
             </div>
             <div className="sc-main-img">
                <img src="https://i.pinimg.com/736x/83/73/13/837313e30d403d18cd25ee6a0789c359.jpg" alt="Scooter" />
             </div>
             <div className="sc-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
             </div>
             <div className="sc-info">
                <div className="sc-title-row">
                   <h2>Danieli Electric<br/>Scooter</h2>
                   <div className="sc-price">$ 1.234</div>
                </div>
                <p>This scooter truly is immaculate throughout as you can see from the photo's and has clearly been cherished. This is the ABS model has the USB charging port in the glove compartment.</p>
                <div className="sc-controls">
                   <div className="sc-colors">
                      <div className="sc-color sc-grey active"></div>
                      <div className="sc-color sc-white"></div>
                      <div className="sc-color sc-white"></div>
                   </div>
                   <div className="sc-qty">
                      <button onClick={() => setQty(Math.max(1, qty-1))}><Minus size={14}/></button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(qty+1)}><Plus size={14}/></button>
                   </div>
                </div>
                <div className="sc-actions">
                   <button className="sc-heart-btn"><Heart size={20} /></button>
                   <button className="sc-add-btn">Add to Cart &gt;&gt;&gt;&gt;&gt;</button>
                </div>
             </div>
          </div>

          {/* Screen 2 */}
          <div className="scooter-screen">
             <div className="sc-header">
                <div className="sc-dots-grid">
                   <div className="dot-g"></div><div className="dot-g"></div>
                   <div className="dot-g"></div><div className="dot-g"></div>
                </div>
                <button className="sc-icon-btn"><div style={{transform: 'rotate(45deg)'}}>+</div></button>
             </div>
             
             <div className="sc-stats-bar">
                <div className="sc-stat active">
                   <div className="sc-stat-icon">🔋</div>
                   <strong>100</strong>
                   <span>km</span>
                </div>
                <div className="sc-stat">
                   <div className="sc-stat-icon">⏱</div>
                   <strong>45</strong>
                   <span>km/h</span>
                </div>
                <div className="sc-stat">
                   <div className="sc-stat-icon">⚡</div>
                   <strong>4</strong>
                   <span>kW</span>
                </div>
             </div>

             <div className="sc-folding-view">
                <img src="https://i.pinimg.com/736x/ed/b9/00/edb9004f6f3c7e08487aa7b86ff6b89f.jpg" alt="Scooter Fold" className="main-fold" />
             </div>

             <div className="sc-orbit-control">
                <div className="orbit-track">
                   <div className="orbit-thumb"></div>
                </div>
                <span>orbit</span>
             </div>

             <div className="sc-bottom-right">
                <button className="sc-download-btn"><Download size={20}/></button>
             </div>
          </div>

          {/* Screen 3 */}
          <div className="scooter-screen sc-screen-3">
             <div className="sc-header">
                <button className="sc-icon-btn"><ChevronLeft size={20} /></button>
                <button className="sc-icon-btn"><ShoppingCart size={20} /></button>
             </div>
             <img src="https://i.pinimg.com/736x/1d/71/96/1d7196a2f9055b71d80c92951bdebb42.jpg" alt="Handlebar" className="sc-handlebar-img" />
             
             <div className="sc-control-panel-card">
                <div className="sc-handle-bar"></div>
                <h3>Control Panel</h3>
                <p>The Control Panel Cover still allows you to maintain complete control of your scooter. Speed, travel time, battery level, remaining charge time etc. There is also a backlight for night.</p>
                <button className="sc-tune-btn">
                   <div className="tune-icon">!i!</div>
                </button>
             </div>
          </div>

       </div>
    </div>
  );
};
export default ScooterPage;
