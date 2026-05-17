import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, Share2, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Zap className="icon-glow-orange animate-pulse" size={32} />
              <span>Finance Analytics</span>
            </Link>
            <p className="footer-desc">
              The next-generation CRM built for modern revenue teams. Automate, analyze, and accelerate your sales pipeline with zero friction.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon glass-panel"><MessageCircle size={16} /></a>
              <a href="#" className="social-icon glass-panel"><Share2 size={16} /></a>
              <a href="#" className="social-icon glass-panel"><Globe size={16} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/platform">Platform</Link></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 Finance Analytics CRM. All rights reserved.</div>
          <div className="status-indicator">
            <span>Status:</span>
            <span className="status-good"><span className="status-dot"></span> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
