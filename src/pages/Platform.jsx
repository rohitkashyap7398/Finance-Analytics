import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Platform() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <section className="tech-section" style={{ background: 'transparent' }}>
        <div className="container tech-container">
          {/* Back to Home Button */}
          <div style={{ marginBottom: '40px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', fontWeight: '500', transition: '0.3s' }} className="hover-lift">
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
          <div className="section-header">
            <h2>The ultimate <span className="text-gradient">Platform</span></h2>
            <p>Built on bleeding edge technology to ensure 99.99% uptime, blazing fast performance, and infinite scalability.</p>
          </div>
          
          <div className="tech-grid" style={{ marginTop: '80px' }}>
            <motion.div whileHover={{ scale: 1.1, opacity: 1 }} className="tech-item">
              <div className="tech-icon react">
                <svg viewBox="0 0 118 35.3" className="tech-svg"><path d="M113.8 28.1H118V13.8h-4.2zm-22.1-7.2c-.3-4.7-4-8-8.5-8-4.8 0-8.5 3.5-8.5 8.2 0 4.6 3.6 8.1 8.5 8.1 4.5 0 8.2-3.3 8.5-7.9h-4.3c-.3 2.4-2.2 4.1-4.2 4.1-2.4 0-4.2-1.9-4.2-4.3s1.8-4.3 4.2-4.3c2 0 3.9 1.7 4.2 4.1h4.3zm-14.7-6.2v14.4h4.1V13.8h4.6v-3.7h-13.3v3.7h4.6zm-17.7 5.7c0 2.2 1.3 3.6 3.9 4.3l1.8.5c1.4.4 2 .9 2 1.9 0 1.2-1 2-2.5 2-1.6 0-2.6-.9-2.7-2.3H56c.1 3.3 2.5 5.7 6.8 5.7 4.1 0 6.7-2.2 6.7-5.4 0-2.4-1.6-3.8-4.2-4.5l-1.8-.5c-1.3-.4-1.8-.9-1.8-1.8 0-1.1 1-1.8 2.4-1.8 1.4 0 2.3.7 2.4 2h3.9c-.2-3-2.5-5.3-6.2-5.3-3.9 0-6.6 2.2-6.6 5.2zM43 14.7c-3.1-3.6-7.8-5.7-12.7-5.7-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2c4.9 0 9.6-2.1 12.7-5.7l-3-3C37.5 37.6 34 39.3 30.3 39.3c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.7 0 7.2 1.7 9.7 4.6l3-3zM2.8 13.8h8.8v3.7H6.9v4.2h4.5v3.6H6.9v7.9H2.8z"></path></svg>
              </div>
              <span>React.js Frontend</span>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, opacity: 1 }} className="tech-item">
              <div className="tech-icon node">
                <svg viewBox="0 0 128 128" className="tech-svg"><path d="M125.4 69c0-1-.3-1.6-1.1-2.1L65.7 32.7c-.8-.5-2.1-.5-3.4 0L4 66.8c-.8.5-1.1 1.2-1.1 2.2v17.4c0 1 .3 1.6 1.1 2.1l58.3 34.2c.8.5 2.1.5 3.4 0l58.3-34.2c.8-.5 1.1-1.2 1.1-2.2V69.1zm-61.4 39.9L16 80v-7.9l48 27.6 48-27.6V80l-48 28.9zM64 94.6L16 67l48-28.7L112 67 64 94.6z"/><path d="M64 45L23.4 21.2 26 19.8 64 41.5l37.8-21.7 2.6 1.4z"/></svg>
              </div>
              <span>Node.js Backend</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1, opacity: 1 }} className="tech-item">
              <div className="tech-icon mongo">
                <svg viewBox="0 0 128 128" className="tech-svg"><path d="M110 50.7c0 23.4-13.6 47.7-43 55.4-3.1 3.5-9.3 11.2-12.8 15.6-2.5-12.7-3.9-28.6-3.8-37.4C26.1 79.5 20.3 54 27.4 33c3.4-9.8 10-18.7 18.2-24.8C59.9-2.3 80.9-.3 96.2 12c11.5 9.3 14 26 13.8 38.7zM34.9 83c5.6 1.3 10.4 4 14.5 8 13.3-6.5 20-19.7 21.7-31.5 3.1-22.3-15.1-33.1-28.6-26.6C30 38.9 29.5 54 34.6 66.8c1.7 4.2 1 11.4.3 16.2zm38 2.7c-5.8 1-13-1-17-5.9 5.3-7.7 7.7-18.6 6.9-27.7-1.1-12.8-13.3-17.7-22.4-12.1-4.2 2.6-6.7 8.3-6.4 13.7.4 8.7 6.3 15.4 12.3 20.6-2.3 4.2-5.7 7.4-10 9.8 9.6.9 17.6-4.6 22.9-10.9-1.9 8.2-1.3 18.5-.2 23.4 9.4-4.8 13.1-12.7 13.9-20.9z"/></svg>
              </div>
              <span>MongoDB Database</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="testimonials-section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <h2>Loved by <span className="text-gradient">visionaries</span></h2>
          </div>
          <div className="testimonials-grid">
            {[
              { text: "Finance Analytics completely transformed our sales process. We're closing deals 3x faster with the automated sequences.", author: "Alex Rivera", role: "VP of Sales, TechCorp", img: "https://i.pravatar.cc/150?img=11" },
              { text: "The anti-gravity UI is not just beautiful, it's incredibly intuitive. Best CRM experience we've ever had.", author: "Samantha Lee", role: "CEO, Innovate Inc.", img: "https://i.pravatar.cc/150?img=47" },
              { text: "Predictive analytics helped us forecast revenue with 98% accuracy. An absolute game changer.", author: "Marcus Johnson", role: "Revenue Ops, HyperGrowth", img: "https://i.pravatar.cc/150?img=33" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                className="testimonial-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="testimonial-avatar-wrapper">
                  <div className="avatar-glow"></div>
                  <img src={t.img} alt={t.author} className="testimonial-avatar floating-fast" style={{ animationDelay: `${i * 1.5}s` }} />
                </div>
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Platform;
