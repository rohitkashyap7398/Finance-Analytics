import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, ArrowLeft, Phone, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', backgroundColor: '#050505', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Back to Home Button */}
        <div style={{ marginBottom: '40px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>

        {/* Promo Banner (Image-style) */}
        <motion.div 
          style={{ 
            position: 'relative', width: '100%', borderRadius: '24px', overflow: 'hidden', 
            background: '#0a0a0a', marginBottom: '80px', display: 'flex', flexDirection: 'column',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)', border: '1px solid rgba(255,215,0,0.1)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Yellow Spotlight */}
          <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
          
          {/* Floating Brand Badge */}
          <div style={{ position: 'absolute', top: '40px', left: '40px', background: '#111', color: '#fff', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', zIndex: 10, border: '1px solid #333' }}>
            Finance Analytics
          </div>

          <div style={{ position: 'relative', zIndex: 1, padding: '80px 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
             
             {/* Text */}
             <div style={{ marginBottom: '60px', position: 'relative' }}>
               <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: '600', marginBottom: '-15px', zIndex: 2, position: 'relative' }}>For any</h3>
               <h1 style={{ fontSize: '6rem', fontWeight: '900', color: '#FFD700', lineHeight: '0.9', textShadow: '0 10px 30px rgba(255,215,0,0.3)', zIndex: 1, position: 'relative', letterSpacing: '-2px' }}>
                 Finance<br/>Analytics
               </h1>
               <div style={{ background: '#222', color: '#fff', padding: '6px 20px', borderRadius: '12px', display: 'inline-block', marginTop: '15px', fontWeight: 'bold', border: '1px solid #444' }}>Service,</div>
             </div>

             {/* Arrow SVG */}
             <svg width="100" height="150" style={{ position: 'absolute', top: '280px', left: '50%', transform: 'translateX(-20px)', zIndex: 10 }}>
                <path d="M20 0 Q 80 80 30 140" fill="none" stroke="#FFD700" strokeWidth="5" strokeLinecap="round" />
                <polygon points="15,130 30,145 45,135" fill="#FFD700" />
             </svg>

             {/* Monitor Mockup */}
             <div style={{ width: '85%', maxWidth: '800px', height: '400px', background: '#000', borderRadius: '16px', border: '12px solid #1a1a1a', borderBottomWidth: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
                {/* Monitor Content */}
                <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                   {/* Software UI Mockup elements */}
                   <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '100%', background: '#333' }}></div>
                   <div style={{ position: 'absolute', top: 0, right: 0, width: '250px', height: '100%', background: '#222' }}></div>
                   <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30px', background: '#111' }}></div>
                   
                   <div style={{ textAlign: 'center', color: '#000', zIndex: 5 }}>
                     <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#FFD700', lineHeight: '0.9' }}>Reach<br/>Out</h2>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', background: '#000', padding: '10px', borderRadius: '30px', color: '#fff' }}>
                        <div style={{ background: '#FFD700', color: '#000', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>To us today For</div>
                        <div style={{ fontWeight: 'bold', paddingRight: '10px' }}>Creative Designs</div>
                     </div>
                   </div>
                </div>
                {/* Curved bottom stand indicator */}
                <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '10px', background: '#333', borderRadius: '5px' }}></div>
             </div>

          </div>

          {/* Bottom Contact Bar */}
          <div style={{ width: '100%', background: '#0a0a0a', padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #222' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFD700', border: '1px solid #FFD700', padding: '12px 24px', borderRadius: '8px' }}>
                <Phone size={24} /> <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.125rem' }}>07082720234</span>
             </div>
             <div style={{ background: '#fff', padding: '8px', borderRadius: '8px' }}>
                <QrCode size={50} color="#000" />
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFD700', border: '1px solid #FFD700', padding: '12px 24px', borderRadius: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.125rem' }}>FinanceAnalytics_01</span>
             </div>
          </div>
        </motion.div>

        {/* Regular Pricing Section */}
        <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff' }}>Simple, transparent <span style={{ color: '#FFD700' }}>pricing</span></h2>
          <p style={{ color: '#888' }}>Choose the perfect plan for your expanding team. Upgrade anytime.</p>
        </div>
        
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { name: 'Starter', price: '$49', desc: 'Perfect for small teams getting started.' },
            { name: 'Pro', price: '$99', desc: 'Advanced features for growing companies.', popular: true },
            { name: 'Enterprise', price: 'Custom', desc: 'Custom solutions for large organizations.' }
          ].map((plan, i) => (
            <motion.div 
              key={i} 
              style={{
                background: plan.popular ? 'linear-gradient(135deg, #222, #111)' : '#111',
                border: plan.popular ? '2px solid #FFD700' : '1px solid #333',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.popular && <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#FFD700', color: '#000', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.875rem' }}>Most Popular</div>}
              
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>{plan.name}</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>{plan.price}<span style={{ fontSize: '1rem', color: '#888' }}>/mo</span></div>
              <p style={{ color: '#888', marginBottom: '30px' }}>{plan.desc}</p>
              
              <Link to="/signup" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '15px', background: plan.popular ? '#FFD700' : '#333', color: plan.popular ? '#000' : '#fff', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none', marginBottom: '30px' }}>
                Get Started
              </Link>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Up to 10 team members',
                  'Unlimited contacts',
                  'Basic email automation',
                  'Standard analytics dashboard'
                ].map((feat, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                    <CheckCircle2 color={plan.popular ? '#FFD700' : '#888'} size={20} /> {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '100px' }}>
          <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: '#fff' }}>Frequently Asked <span style={{ color: '#FFD700' }}>Questions</span></h2>
          </div>
          <div style={{ background: '#111', borderRadius: '24px', padding: '40px', border: '1px solid #333' }}>
            {[
              { q: 'How does Finance Analytics integrate with my current tools?', a: 'We offer native 1-click integrations with Google Workspace, Office 365, Slack, and over 100+ other popular SaaS platforms via our advanced API structure.' },
              { q: 'Can I import my existing CRM data?', a: 'Absolutely. We provide an AI-powered migration wizard that automatically maps and imports your data from Salesforce, HubSpot, or custom CSV files in minutes.' },
              { q: 'Is there a limit on API requests?', a: 'Our Pro and Enterprise plans offer generous API limits suitable for heavy usage. Starter plans include enough requests for standard integrations.' },
              { q: 'What level of support do you provide?', a: 'All plans include 24/7 email support. Pro plans add priority chat support, and Enterprise plans include a dedicated success manager and phone support.' }
            ].map((faq, i) => (
              <details key={i} style={{ marginBottom: '20px', borderBottom: i !== 3 ? '1px solid #333' : 'none', paddingBottom: '20px' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#fff', fontSize: '1.25rem', fontWeight: '500' }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </summary>
                <div style={{ marginTop: '15px', color: '#888', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
