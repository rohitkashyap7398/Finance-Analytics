import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Features() {
  const features = [
    { q: 'Lead Management', a: 'Auto-enrich leads and score them using AI based on buying intent and engagement.' },
    { q: 'Email Automation', a: 'Create hyper-personalized sequences that convert at scale with smart follow-ups.' },
    { q: 'Client Dashboard', a: 'Give clients a dedicated portal to track progress, view proposals, and share files.' },
    { q: 'Analytics Reports', a: 'Real-time revenue intelligence, pipeline velocity, and forecasting models.' },
    { q: 'Task Automation', a: 'Eliminate data entry. Sync emails, meetings, and calls automatically to CRM.' },
    { q: 'Enterprise Security', a: 'Bank-grade encryption, SSO, and granular role-based access control out of the box.' }
  ];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#0f0f0f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background Shapes (Lime Green #d4ff00) */}
      
      {/* Top Right Massive Shape */}
      <div style={{ 
        position: 'absolute', top: 0, right: 0, width: '40vw', height: '60vh', 
        backgroundColor: '#d4ff00', borderBottomLeftRadius: '100px', zIndex: 0 
      }}></div>
      
      {/* Left Middle Shape */}
      <div style={{ 
        position: 'absolute', top: '40%', left: '-5%', width: '15vw', height: '30vh', 
        backgroundColor: '#d4ff00', borderRadius: '60px', zIndex: 0 
      }}></div>

      {/* Bottom Left Shape */}
      <div style={{ 
        position: 'absolute', bottom: 0, left: 0, width: '45vw', height: '15vh', 
        backgroundColor: '#d4ff00', borderTopRightRadius: '80px', zIndex: 0,
        display: 'flex', alignItems: 'center', paddingLeft: '40px'
      }}>
         <div>
            <div style={{ color: '#0f0f0f', fontWeight: '800', fontSize: '1.5rem' }}>Finance Analytics</div>
            <div style={{ color: '#0f0f0f', fontWeight: '500', fontSize: '0.875rem' }}>@finance_analytics</div>
         </div>
      </div>

      {/* Bottom Right Outline Shape */}
      <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '30vw', height: '30vh', zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M 50 100 C 50 50, 100 50, 100 0 L 100 100 Z" fill="transparent" stroke="#d4ff00" strokeWidth="2" />
      </svg>

      {/* Save For Later Bookmark (Top Right) */}
      <div style={{ position: 'absolute', top: '40px', right: '10vw', zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ color: '#0f0f0f', fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'right', lineHeight: '1.1' }}>Save<br/>For<br/>Later</span>
        <svg width="40" height="60" viewBox="0 0 24 36" fill="#d4ff00" stroke="#d4ff00" strokeWidth="2">
           <path d="M4 2v32l8-8 8 8V2H4z" fill="#0f0f0f" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
        {/* Back to Home Button */}
        <div style={{ marginBottom: '40px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
        <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff' }}>Core <span style={{ color: '#d4ff00' }}>Features</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '40px' }}>
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              style={{
                background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 40%, #4a5412 100%)',
                borderRadius: '32px',
                padding: '50px 40px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <div style={{ color: '#d4ff00', fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>
                Feature:
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '32px', fontWeight: '500', lineHeight: '1.3' }}>
                {feat.q}
              </h3>
              
              <div style={{ width: '60%', height: '1px', background: 'rgba(212, 255, 0, 0.3)', marginBottom: '32px' }}></div>
              
              <div style={{ color: '#d4ff00', fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>
                Benefit:
              </div>
              <p style={{ color: '#fff', fontSize: '1.125rem', lineHeight: '1.6', fontWeight: '400', maxWidth: '300px' }}>
                {feat.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
