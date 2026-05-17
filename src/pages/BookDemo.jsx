import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '600px', padding: '40px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,95,31,0.1)', border: '2px solid #FF5F1F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF5F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Request <span className="text-gradient">Received!</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>Thank you for your interest. One of our product experts will be in touch with you shortly to schedule your demo.</p>
          </div>
        ) : (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '2rem' }}>Book a <span className="text-gradient">Demo</span></h2>
            <p style={{ textAlign: 'center', marginBottom: '32px', color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: '1.6' }}>
              Discover how Finance Analytics can transform your sales process. Schedule a 30-minute personalized walkthrough with our product experts.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>First Name</label>
                  <input required type="text" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Last Name</label>
                  <input required type="text" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Work Email</label>
                <input required type="email" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Company Size</label>
                <select required className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', appearance: 'none' }}>
                  <option value="" style={{ background: '#05050A' }}>Select...</option>
                  <option value="1-10" style={{ background: '#05050A' }}>1-10 employees</option>
                  <option value="11-50" style={{ background: '#05050A' }}>11-50 employees</option>
                  <option value="51-200" style={{ background: '#05050A' }}>51-200 employees</option>
                  <option value="201+" style={{ background: '#05050A' }}>201+ employees</option>
                </select>
              </div>
              <button type="submit" className="glow-btn" style={{ width: '100%', marginTop: '16px', padding: '14px', fontSize: '1.125rem' }}>Request Demo</button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default BookDemo;
