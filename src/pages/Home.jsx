import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, BarChart3, Mail, LayoutDashboard, Zap, Shield, 
  ArrowRight, CheckCircle2, ChevronDown, Play
} from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '0', paddingTop: '140px' }}>
        <div className="grid-overlay"></div>
        <div className="laser-flare"></div>

        <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'left', maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(255,95,31,0.1)', border: '1px solid rgba(255,95,31,0.3)', color: '#FF5F1F', fontSize: '0.875rem', fontWeight: '500', marginBottom: '24px' }}>
              Finance Solution in One Platform <ArrowRight size={14} />
            </div>
            <h1 className="hero-title" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
              Unlock The Power <br/>Of Finance Analytics
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 0 40px 0', textAlign: 'left' }}>
              Gain deep insights into your financial data and make smarter decisions. Turn numbers into strategies that drive growth and efficiency.
            </p>
            
            <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
              <Link to="/signup" className="glow-btn" style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '30px' }}>
                Let's Get Started
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Mockup - Orange Theme */}
          <motion.div 
            className="dashboard-wrapper floating-slow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginTop: '120px', position: 'relative', zIndex: 20 }}
          >
            <div className="dashboard-mockup" style={{ boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 -20px 100px rgba(255, 95, 31, 0.3)', borderTop: '2px solid #FF5F1F', background: '#1c1a1e' }}>
              <div className="mockup-header" style={{ background: 'rgba(25, 20, 18, 0.9)' }}>
                <div className="window-controls">
                  <div className="control-dot dot-red" />
                  <div className="control-dot dot-yellow" />
                  <div className="control-dot dot-green" />
                </div>
                <div className="mockup-url">fintrixity-dashboard.app</div>
              </div>
              <div className="mockup-body" style={{ background: '#0F0D0C', borderColor: 'rgba(255,255,255,0.05)' }}>
                {/* Sidebar */}
                <div className="mockup-sidebar">
                  {[
                    { icon: LayoutDashboard, label: 'Dashboard', active: true },
                    { icon: BarChart3, label: 'Analytics' },
                    { icon: Users, label: 'Transactions' },
                    { icon: Mail, label: 'Invoices' },
                  ].map((item, i) => (
                    <div key={i} className={`sidebar-item ${item.active ? 'active' : ''}`} style={item.active ? { background: 'rgba(255,95,31,0.1)', color: '#FF5F1F' } : {}}>
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '24px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Features</div>
                  {[
                    { icon: Zap, label: 'Recurring' },
                    { icon: Shield, label: 'Subscriptions' },
                  ].map((item, i) => (
                    <div key={i} className="sidebar-item">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                {/* Main Content Area */}
                <div className="mockup-content">
                  <div className="content-header">
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Overview</h3>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Here is the summary of overall data</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span className="stat-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '20px' }}>This Month <ChevronDown size={14} style={{ display: 'inline' }} /></span>
                    </div>
                  </div>
                  <div className="stats-grid">
                    {/* Orange Card */}
                    <div className="stat-card" style={{ background: 'linear-gradient(135deg, #FF5F1F, #FF2A00)', boxShadow: '0 10px 30px rgba(255,95,31,0.3)', color: 'white' }}>
                      <div className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <div style={{ background: 'white', padding: '6px', borderRadius: '8px', color: '#FF5F1F' }}><LayoutDashboard size={16} /></div>
                          <span style={{ fontSize: '1rem', fontWeight: '600' }}>My balance</span>
                        </div>
                      </div>
                      <div className="stat-value" style={{ fontSize: '2rem' }}>$28,520.30</div>
                      <div className="stat-trend" style={{ color: 'white', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '12px', display: 'inline-block', fontSize: '0.75rem', marginTop: '8px' }}>+15% ↑</div>
                    </div>
                    {/* Dark Cards */}
                    {[
                      { label: 'Savings account', value: '$24,800.45', trend: '-2% ↓', icon: Shield },
                      { label: 'Investment portfolio', value: '$70,120.78', trend: '-4% ↓', icon: BarChart3 }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card glass-panel" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '6px', borderRadius: '8px', color: 'white' }}><stat.icon size={16} /></div>
                            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{stat.label}</span>
                          </div>
                        </div>
                        <div className="stat-value" style={{ fontSize: '1.75rem' }}>{stat.value}</div>
                        <div className="stat-trend" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.trend}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Area */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                    <div className="glass-panel" style={{ padding: '24px', background: 'rgba(255,255,255,0.03)' }}>
                       <h4 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>My Wallet</h4>
                       <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Today 1 USD = 122.30 BDT</p>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '8px' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#eee' }}></div> USD</div>
                         <span>1</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ccc' }}></div> EUR</div>
                         <span>1</span>
                       </div>
                    </div>
                    <div className="glass-panel" style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                         <div>
                           <h4 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Cash Flow</h4>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$540,323.45</div>
                         </div>
                         <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '4px' }}>
                            <div style={{ padding: '6px 16px', borderRadius: '16px', fontSize: '0.75rem' }}>Monthly</div>
                            <div style={{ padding: '6px 16px', borderRadius: '16px', fontSize: '0.75rem', background: '#FF5F1F', color: 'white' }}>Yearly</div>
                         </div>
                       </div>
                       <div style={{ flex: 1, marginTop: '24px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                          {[30, 45, 60, 40, 80, 50, 90, 70, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                              <div style={{ width: '100%', height: `${h}%`, background: i === 7 ? '#FF5F1F' : 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Boy Animation Section */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 0', background: '#050505', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Typography from Image */}
          <div style={{ textAlign: 'center', zIndex: 20, marginBottom: '20px' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1', color: '#fff', letterSpacing: '-2px' }}>
              <span style={{ color: '#888', fontWeight: '300' }}>Great</span> <span style={{ background: '#d4ff00', color: '#050505', padding: '0 10px' }}>design</span><br/>
              speaks <span style={{ color: '#fff' }}>louder</span><br/>
              <span style={{ fontSize: '2.5rem', fontWeight: '300', color: '#888' }}>than words</span>
            </h2>
          </div>

          {/* Boy Animation Container */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '-40px' }}>
             
             {/* Glowing Background Circle */}
             <motion.div 
               style={{ 
                 position: 'absolute', top: '20%', width: '400px', height: '400px', borderRadius: '50%', 
                 background: '#d4ff00', filter: 'blur(80px)', opacity: 0.3, zIndex: 0 
               }}
               animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* Solid Background Circle */}
             <motion.div 
               style={{ 
                 position: 'absolute', top: '30%', width: '350px', height: '350px', borderRadius: '50%', 
                 background: 'radial-gradient(circle, #66aa00 0%, #1a3300 100%)', zIndex: 1,
                 boxShadow: '0 0 50px rgba(212,255,0,0.5)'
               }}
             />

             {/* Boy Character Simulation */}
             <motion.div 
               style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                {/* 3D Boy Avatar */}
                <img 
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187871.png" 
                  alt="3D Boy"
                  style={{ width: '350px', filter: 'grayscale(100%) contrast(1.2)', objectFit: 'contain' }} 
                />
                
                {/* VR Glasses / Green Bar over eyes */}
                <motion.div 
                  style={{ 
                    position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '220px', height: '60px', background: 'rgba(212,255,0,0.85)', 
                    backdropFilter: 'blur(8px)', borderRadius: '4px', border: '2px solid #d4ff00',
                    boxShadow: '0 0 30px rgba(212,255,0,0.6)'
                  }} 
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
             </motion.div>

             {/* Floating text badge */}
             <motion.div 
               style={{ position: 'absolute', right: '10%', bottom: '20%', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}
               animate={{ x: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                {/* Dashed Line SVG pointing down */}
                <svg width="40" height="60" style={{ position: 'absolute', top: '-50px', left: '-20px' }}>
                   <path d="M40 0 Q 0 0 0 60" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" />
                   <polygon points="-5,55 0,60 5,55" fill="#fff" />
                </svg>
                
                <div style={{ width: '20px', height: '30px', background: '#d4ff00', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                <div style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'serif', letterSpacing: '-0.5px' }}>
                   save it for later
                </div>
             </motion.div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', zIndex: 20, color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
             Finance Analytics CRM — Where design meets imagination.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container cta-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card glass-card"
          >
            <h2 className="cta-title">Ready to defy <span className="text-gradient">gravity?</span></h2>
            <p className="cta-desc">
              Join 10,000+ modern teams already using Finance Analytics to close more deals and automate their revenue operations.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="glow-btn btn-large" style={{ borderRadius: '30px' }}>
                Start 14-Day Free Trial
              </Link>
              <Link to="/demo" className="glow-btn-secondary btn-large" style={{ borderRadius: '30px' }}>
                Contact Sales
              </Link>
            </div>
            <p className="cta-note">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
