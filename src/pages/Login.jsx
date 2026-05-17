import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Login() {
  return (
    <div className="form-page" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '400px', padding: '40px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem' }}>Welcome <span className="text-gradient">Back</span></h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Email Address</label>
            <input type="email" placeholder="you@company.com" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Password</label>
            <input type="password" placeholder="••••••••" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
          </div>
          <button type="button" className="glow-btn" style={{ width: '100%', marginTop: '16px', padding: '12px' }}>Sign In</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
          Don't have an account? <Link to="/signup" className="text-gradient" style={{ fontWeight: '600' }}>Start Free Trial</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
