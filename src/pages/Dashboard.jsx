import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Settings, Bell, Home, BarChart2, CreditCard, MessageSquare, Box, Info, Lock, Eye, Edit2, Shield, Trash2, Filter, MoreVertical, Plus, RefreshCw, Upload, Download, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const [activeNav, setActiveNav] = useState('home');
  const [walletEnabled, setWalletEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState('top');
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = [
    { day: 'Jul 21', h: 40, income: '$3,200.00', expense: '$1,100.00' },
    { day: 'Jul 22', h: 60, income: '$5,400.00', expense: '$2,300.00' },
    { day: 'Jul 23', h: 45, income: '$4,100.00', expense: '$1,800.00' },
    { day: 'Jul 24', h: 80, income: '$6,784.00', expense: '$2,567.00' },
    { day: 'Jul 25', h: 30, income: '$2,900.00', expense: '$1,200.00' },
    { day: 'Jul 26', h: 70, income: '$5,800.00', expense: '$2,100.00' },
    { day: 'Jul 27', h: 55, income: '$4,600.00', expense: '$1,900.00' },
    { day: 'Jul 28', h: 40, income: '$3,500.00', expense: '$1,300.00' },
    { day: 'Jul 29', h: 20, income: '$1,800.00', expense: '$800.00' },
  ];

  return (
    <div className="dashboard-root">
      {/* Sidebar */}
      <aside className="db-sidebar">
        <div className="db-logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L2 22h20L12 2zm0 4l6 14h-4l-2-5h-4l-2 5H6l6-14z"/>
          </svg>
        </div>
        <div className="db-nav-items">
          {[
            { id: 'home', icon: Home },
            { id: 'chart', icon: BarChart2 },
            { id: 'card', icon: CreditCard },
            { id: 'msg', icon: MessageSquare },
            { id: 'box', icon: Box },
          ].map(item => (
            <div 
              key={item.id} 
              className={`db-nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <item.icon size={20} />
            </div>
          ))}
        </div>
        <Link to="/" className="db-nav-item" style={{ marginTop: 'auto', textDecoration: 'none' }} title="Back to Home">
          <ArrowLeft size={20} />
        </Link>
        <div className="db-nav-item" style={{ marginTop: '16px' }}>
          <Info size={20} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="db-main-content">
        {/* Header */}
        <header className="db-header">
          <div className="db-search">
            <Search size={18} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="db-header-right">
            <div className="db-icon-btn"><Settings size={18} /></div>
            <div className="db-icon-btn"><Bell size={18} /></div>
            <img src="https://i.pravatar.cc/150?img=47" alt="User" className="db-avatar" />
          </div>
        </header>

        {activeNav !== 'home' ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b898d' }}>
            <h2>Module "{activeNav}" under construction</h2>
          </div>
        ) : (
          <motion.div 
            className="db-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Column */}
            <div className="db-col">
              {/* Main Chart */}
              <div className="db-card">
                <div className="main-chart-header">
                  <div>
                    <div className="mc-title">Main Stoks</div>
                    <div className="mc-value">$164,087.32 <span className="mc-trend">+9.3%</span></div>
                  </div>
                  <div className="mc-actions">
                    <div className="db-icon-btn" style={{ width: '32px', height: '32px' }}><Plus size={14} /></div>
                    <div className="db-icon-btn" style={{ width: '32px', height: '32px' }}><RefreshCw size={14} /></div>
                    <div className="db-icon-btn" style={{ width: '32px', height: '32px' }}><Upload size={14} /></div>
                    <div className="db-icon-btn" style={{ width: '32px', height: '32px' }}><Download size={14} /></div>
                    <div className="db-icon-btn" style={{ width: '32px', height: '32px', background: 'transparent' }}><MoreVertical size={16} /></div>
                  </div>
                </div>

                <div className="bar-chart-area">
                  <div className="bar-chart-gridline"></div>
                  {chartData.map((data, i) => (
                    <div 
                      key={i} 
                      className="chart-bar-wrapper"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <motion.div 
                        className="chart-bar" 
                        initial={{ height: 0 }}
                        animate={{ height: `${data.h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                      <div className="chart-label">{data.day}</div>
                      
                      <AnimatePresence>
                        {hoveredBar === i && (
                          <motion.div 
                            className="chart-tooltip"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            <div style={{ color: '#8b898d', fontSize: '0.65rem', marginBottom: '8px' }}>{data.day}, 2026</div>
                            <div className="tt-row">
                              <span style={{ color: '#ff5f1f' }}>• Income</span>
                              <span style={{ color: '#fff', fontWeight: '500' }}>{data.income}</span>
                            </div>
                            <div className="tt-row" style={{ marginBottom: 0 }}>
                              <span style={{ color: '#9d4edd' }}>• Expense</span>
                              <span style={{ color: '#fff', fontWeight: '500' }}>{data.expense}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Manager */}
              <div className="db-card">
                <div className="activity-header">
                  <div className="ac-title">Activity manager</div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div className="am-search">
                      <Search size={14} />
                      <input type="text" placeholder="Search in activities..." />
                    </div>
                    <div className="am-filter">
                      Filters <Filter size={14} />
                    </div>
                  </div>
                </div>

                <div className="am-cards">
                  <div className="am-card">
                    <div className="am-card-title">Bankloan Approved</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                       <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ff5f1f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={12} color="#fff" /></div>
                       <div style={{ flex: 1, height: '2px', background: '#333' }}><div style={{ width: '60%', height: '100%', background: '#8b898d' }}></div></div>
                       <div style={{ fontSize: '0.65rem', color: '#8b898d' }}>8%</div>
                    </div>
                    <div className="am-val">$100,000 <span style={{ fontSize: '0.75rem', color: '#8b898d', fontWeight: '400' }}>USD</span></div>
                    <div style={{ fontSize: '0.65rem', color: '#8b898d', marginTop: 'auto' }}>Repayment due<br/><span style={{ color: '#fff' }}>May 24, 2026</span></div>
                  </div>
                  
                  <div className="am-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <div style={{ padding: '8px', border: '1px solid #ff5f1f', borderRadius: '8px', color: '#ff5f1f' }}><Shield size={20} /></div>
                    </div>
                    <div style={{ fontSize: '1rem', color: '#fff', fontWeight: '500' }}>Wallet Verification</div>
                    <div style={{ fontSize: '0.75rem', color: '#8b898d', lineHeight: '1.4' }}>Increase the security of your wallet by activating 2-steps authentication</div>
                    <button 
                      className={`am-btn ${walletEnabled ? 'success' : ''}`} 
                      style={{ marginTop: 'auto' }}
                      onClick={() => setWalletEnabled(!walletEnabled)}
                    >
                      {walletEnabled ? 'Enabled' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="db-col">
              {/* Active Cards */}
              <div className="db-card">
                <div className="active-cards-header">
                  <div className="ac-title">Active Cards</div>
                  <div className="ac-lock">Lock Card <Lock size={12} /></div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="credit-card" style={{ flex: 1 }}>
                    <div className="cc-top">
                      <span>**** 2809</span>
                    </div>
                    <div className="cc-bottom">
                      <button className="cc-btn">Send Funds</button>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontStyle: 'italic' }}>VISA</span>
                    </div>
                  </div>
                  <div style={{ width: '40px', background: '#1a171a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', writingMode: 'vertical-rl', fontSize: '0.75rem', color: '#8b898d' }}>
                    More cards »
                  </div>
                </div>

                <div className="card-actions">
                  {[
                    { label: 'Card details', icon: CreditCard },
                    { label: 'Edit card', icon: Edit2 },
                    { label: 'Security code', icon: Shield },
                    { label: 'Delete card', icon: Trash2, danger: true },
                  ].map((action, i) => (
                    <div key={i} className={`action-item ${action.danger ? 'danger' : ''}`}>
                      <div className="icon-box"><action.icon size={16} /></div>
                      <span>{action.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-row">
                {/* Line of Credit */}
                <div className="db-card" style={{ flex: 1 }}>
                  <div className="loc-header">
                    <span>Line of Credit</span>
                    <MoreVertical size={16} color="#8b898d" />
                  </div>
                  <div className="loc-chart">
                    <div className="loc-circle">
                      <div className="loc-inner">
                        <div className="loc-label">Amount Borrowed</div>
                        <div className="loc-amount">$4,267.33</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <div className="loc-label">Remaining Credit</div>
                    <div className="loc-amount" style={{ fontSize: '1rem' }}>$46,456.67</div>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="db-card" style={{ flex: 1.2 }}>
                  <div className="pf-header">
                    <span className="ac-title">Portfolio</span>
                    <MoreVertical size={16} color="#8b898d" />
                  </div>
                  <div className="pf-val">$16,678.00 <span className="pf-trend">+18.78%</span></div>
                  <p className="pf-desc">This month, you raked in $4,410.00, which is your highest achievement in the past three months!</p>
                  
                  <div className="pf-tabs">
                    <div className={`pf-tab ${activeTab === 'top' ? 'active' : ''}`} onClick={() => setActiveTab('top')}>Top performance</div>
                    <div className={`pf-tab ${activeTab === 'worst' ? 'active' : ''}`} onClick={() => setActiveTab('worst')}>Worst performance</div>
                  </div>

                  <div className="pf-list-item">
                    <div className="pf-coin">
                       <div className="pf-coin-icon">
                          <svg width="16" height="16" viewBox="0 0 32 32" fill="#fff"><path d="M15.925 23.969L15.892 23.999L5.352 17.755L15.925 32L26.505 17.755L15.925 23.969Z" opacity="0.6"/><path d="M15.925 0L5.342 16.591L15.925 22.846L15.952 22.827L26.51 16.591L15.925 0Z"/></svg>
                       </div>
                       <div>
                         <div style={{ fontSize: '0.875rem', color: '#fff', fontWeight: '500' }}>{activeTab === 'top' ? 'Ethereum' : 'Bitcoin'}</div>
                         <div style={{ fontSize: '0.75rem', color: '#8b898d' }}>{activeTab === 'top' ? 'ETH' : 'BTC'}</div>
                       </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: '0.875rem', color: '#fff', fontWeight: '500' }}>{activeTab === 'top' ? '$4,445.52' : '$61,200.00'}</div>
                       <div style={{ fontSize: '0.75rem', color: activeTab === 'top' ? '#ff5f1f' : '#ff3333' }}>{activeTab === 'top' ? '+27.68 (0.63%)' : '-120.00 (0.19%)'}</div>
                    </div>
                  </div>
                  
                  {/* Sparkline */}
                  <svg style={{ width: '100%', height: '30px', marginTop: '16px' }} preserveAspectRatio="none" viewBox="0 0 100 30">
                     <motion.path 
                       d={activeTab === 'top' ? "M 0 25 Q 20 20 40 25 T 80 15 T 100 5" : "M 0 5 Q 20 10 40 5 T 80 20 T 100 25"} 
                       fill="transparent" 
                       stroke={activeTab === 'top' ? "#ff5f1f" : "#ff3333"} 
                       strokeWidth="2"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 1 }}
                     />
                     <circle cx="80" cy={activeTab === 'top' ? "15" : "20"} r="3" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
