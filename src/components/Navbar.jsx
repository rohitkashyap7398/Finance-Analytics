import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // We will create this for cleaner CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar custom-navbar">
      <div className="nav-container responsive-nav">
        {/* Left */}
        <Link to="/" className="nav-logo custom-logo">
          <div className="logo-icon-bg">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <span className="logo-text">Finance Analytics</span>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>

        {/* Center Pill & Right (Desktop & Mobile view) */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="center-pill">
            <Link to="/" className="pill-link active" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/features" className="pill-link" onClick={() => setIsOpen(false)}>Feature</Link>
            <Link to="/pricing" className="pill-link" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/dashboard" className="pill-link" onClick={() => setIsOpen(false)}>FAQ</Link>
          </div>

          <div className="right-actions">
            <a href="#" className="discord-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.9555 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.419-2.1568 2.419z"/></svg>
              Join in Discord
            </a>
            <Link to="/signup" className="glow-btn nav-signup-btn" onClick={() => setIsOpen(false)}>Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
