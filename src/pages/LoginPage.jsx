import React from 'react';
import { Mail, Key, ArrowRight, Star } from 'lucide-react';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Background Shapes */}
      <div className="login-bg-shapes">
         <div className="shape sphere-1"></div>
         <div className="shape cylinder"></div>
         <div className="shape sphere-2"></div>
      </div>

      <div className="login-wrapper">
         
         <div className="login-left">
            <div className="login-card login-glass-panel">
               <div className="login-header">
                  <span className="brand">Cloud 9</span>
                  <a href="#" className="signup-link">Sign Up</a>
               </div>
               
               <div className="login-title-row">
                  <h2>Log in</h2>
                  <button className="fb-btn">
                     <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>f</span> Facebook
                  </button>
               </div>

               <div className="login-form">
                  <div className="login-input-group">
                     <Mail size={16} className="login-input-icon" />
                     <input type="email" placeholder="E-mail address" />
                  </div>
                  <div className="login-input-group">
                     <Key size={16} className="login-input-icon" />
                     <input type="password" placeholder="Password" />
                     <span className="forgot-text">I forgot</span>
                  </div>
               </div>

               <div className="login-footer">
                  <p className="disclaimer">Please use cannabis responsibly. For adult use only, and in compliance with local laws and regulations.</p>
                  <button className="login-submit-btn">
                     <ArrowRight size={18} />
                  </button>
               </div>
               <p className="consume-text">Please consume responsibly.</p>
            </div>

            <div className="new-in-card login-glass-panel">
               <h3>New in</h3>
               <p>C. Lab Joints</p>
               <div className="discover-text">Discover</div>
            </div>
         </div>

         <div className="login-right">
            <div className="event-card login-glass-panel">
               <div className="event-header">
                  <div className="event-date">
                     <h1 className="day">Wed</h1>
                     <h1 className="date-num">24th</h1>
                  </div>
                  <div className="grand-opening">
                     Grand Opening<br/>New Store
                  </div>
               </div>
               
               <div className="event-details">
                  <p>18 PM</p>
                  <p>Kerkstraat 12B</p>
                  <p>Amsterdam</p>
               </div>

               <div className="event-art">
                  <div className="art-rect"></div>
                  <div className="art-ring">
                     <div className="art-ball"></div>
                  </div>
               </div>

               <div className="event-footer">
                  <div className="brand-logo">
                     <Star size={20} fill="currentColor" /> C. Lab
                  </div>
                  <button className="join-now-btn">
                     Join now <div className="join-icon"><ArrowRight size={16} color="#fff" /></div>
                  </button>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

export default LoginPage;
