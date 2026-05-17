import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function SignUp() {
  return (
    <div className="form-page" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '500px', padding: '40px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '2rem' }}>Start your <span className="text-gradient">Free Trial</span></h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>14 days free. No credit card required.</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>First Name</label>
              <input type="text" placeholder="John" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Last Name</label>
              <input type="text" placeholder="Doe" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Work Email</label>
            <input type="email" placeholder="john@company.com" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Company Name</label>
            <input type="text" placeholder="Acme Inc." className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
          </div>
          <button type="button" className="glow-btn" style={{ width: '100%', marginTop: '16px', padding: '12px' }}>Create Account</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
          Already have an account? <Link to="/login" className="text-gradient" style={{ fontWeight: '600' }}>Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
