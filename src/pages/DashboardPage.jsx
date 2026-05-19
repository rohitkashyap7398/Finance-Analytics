import React, { useState } from 'react';
import { 
  Home, Inbox, Activity, Users, BarChart2, Folder, 
  Gamepad2, Gift, Plus, ChevronDown 
} from 'lucide-react';
import './dashboard.css';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="dash-container">
       <div className="dash-window">
          
          {/* Sidebar */}
          <aside className="dash-sidebar">
             <div className="dash-logo">
                <div className="dash-logo-icon"></div>
                <h2>Dashburd</h2>
             </div>
             
             <div className="dash-menu-group">
                <p className="dash-menu-label">OVERVIEW</p>
                {['Dashboard', 'Inbox', 'Feed', 'Staff', 'Statistic', 'Folders'].map((menu, i) => (
                  <div 
                    key={i} 
                    className={`dash-menu-item ${activeMenu === menu ? 'active' : ''}`}
                    onClick={() => setActiveMenu(menu)}
                  >
                     {menu === 'Dashboard' && <Home size={18} />}
                     {menu === 'Inbox' && <Inbox size={18} />}
                     {menu === 'Feed' && <Activity size={18} />}
                     {menu === 'Staff' && <Users size={18} />}
                     {menu === 'Statistic' && <BarChart2 size={18} />}
                     {menu === 'Folders' && <Folder size={18} />}
                     <span>{menu}</span>
                     {menu === 'Staff' && <div className="dash-badge">2</div>}
                  </div>
                ))}
             </div>

             <div className="dash-menu-group">
                <p className="dash-menu-label">ROOMS</p>
                <div className="dash-menu-item" onClick={() => setActiveMenu('Mentoring')}>
                   <span className="dash-emoji">🚀</span> <span>Mentoring</span>
                </div>
                <div className="dash-menu-item" onClick={() => setActiveMenu('Gaming')}>
                   <Gamepad2 size={18} /> <span>Gaming</span>
                </div>
                <div className="dash-menu-item" onClick={() => setActiveMenu('Celebrating')}>
                   <Gift size={18} /> <span>Celebrating</span>
                </div>
             </div>

             <div className="dash-pro-card">
                <div className="pin-icon">📌</div>
                <h4>Go Pro!</h4>
                <p>Upgrade your plans to get pro benefits</p>
                <button className="dash-btn-pink">Get Started</button>
             </div>
          </aside>

          {/* Main Content */}
          <main className="dash-main">
             <header className="dash-header">
                <div className="dash-greeting">
                   <h1>Hello Creative! 👋</h1>
                   <div className="dash-toggle">
                      <button className="active">General</button>
                      <button>Workspace</button>
                   </div>
                </div>
                <div className="dash-header-right">
                   <div className="dash-user">
                      <img src="https://i.pravatar.cc/100?img=11" alt="Nathan" />
                      <div>
                         <strong>Nathan Walker</strong>
                         <span>UI Designer</span>
                      </div>
                      <ChevronDown size={14} />
                   </div>
                   <button className="dash-btn-pink shadow-pink"><Plus size={16}/> New Card</button>
                </div>
             </header>

             <div className="dash-tabs">
                {['Overview', 'Team Details', 'Tasks Statistic', 'My Plans', 'Notifications', 'Integrations'].map((tab, i) => (
                  <span 
                    key={i} 
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </span>
                ))}
             </div>

             <div className="dash-grid">
                
                <div className="dash-card peel-tr" style={{gridColumn: 'span 3', gridRow: 'span 2'}}>
                   <h3>Projects Stats</h3>
                   <p className="dash-sub">Balance of downloads of the company</p>
                   <div className="bar-chart">
                      <div className="bar" style={{height: '40%'}}></div>
                      <div className="bar pink" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '60%'}}></div>
                      <div className="bar" style={{height: '30%'}}></div>
                      <div className="bar" style={{height: '50%'}}></div>
                   </div>
                   <div className="bar-labels">
                      <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                   </div>
                </div>

                <div className="dash-card dash-hover" style={{gridColumn: 'span 2'}}>
                   <div className="task-chart-header">
                      <div>
                         <h3>Tasks Chart</h3>
                         <p className="dash-sub">73% of your task has done</p>
                      </div>
                      <div className="donut-chart">
                         <span>73%</span>
                      </div>
                   </div>
                   <div className="chart-legend">
                      <span className="dot pink"></span> Done
                      <span className="dot dark"></span> In progress
                   </div>
                </div>

                <div className="dash-card card-pink text-white dash-hover" style={{gridColumn: 'span 2'}}>
                   <div className="icon-bg-white"><Folder size={20} color="#e83a8b" /></div>
                   <h3>Projects Report</h3>
                   <p>we done 17 project</p>
                </div>

                <div className="dash-card dash-hover" style={{gridColumn: 'span 3'}}>
                   <div className="app-guidelines">
                      <div className="ag-icon">A</div>
                      <div>
                         <h4>App Store new guidlines</h4>
                         <p className="dash-sub">About 3 months to deadline</p>
                      </div>
                   </div>
                </div>

                <div className="dash-card peel-br" style={{gridColumn: 'span 5', gridRow: 'span 2'}}>
                   <div className="tasks-comp-header">
                      <h3>Tasks Comparison</h3>
                      <div className="tc-legend">
                         <span className="dot pink"></span> Done <span className="dot purple"></span> In progress
                      </div>
                   </div>
                   <div className="line-chart-mock">
                      <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="animated-svg">
                         <path d="M0 80 Q 50 20 100 50 T 200 40 T 300 80 T 400 30" fill="none" stroke="#e83a8b" strokeWidth="3" />
                         <path d="M0 60 Q 50 90 100 70 T 200 20 T 300 60 T 400 50" fill="none" stroke="#682a82" strokeWidth="3" />
                      </svg>
                   </div>
                   <div className="bar-labels tc-labels">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                   </div>
                </div>

                <div className="dash-card dash-hover" style={{gridColumn: 'span 5'}}>
                   <div className="recent-act-header">
                      <h3>Recent Activities</h3>
                      <span className="dash-sub">3 News</span>
                   </div>
                   <div className="act-list">
                      <div className="act-item">
                         <img src="https://i.pravatar.cc/100?img=5" alt="user" />
                         <div>
                            <h4>Kristin Watson</h4>
                            <p>I merged my tasks on feelon project</p>
                         </div>
                      </div>
                      <div className="act-item active-pink">
                         <img src="https://i.pravatar.cc/100?img=8" alt="user" />
                         <div>
                            <h4>Guy Hawkins</h4>
                            <p>Please approve my sale @Nathan</p>
                         </div>
                         <button className="approve-btn">Approve</button>
                      </div>
                      <div className="act-item">
                         <img src="https://i.pravatar.cc/100?img=3" alt="user" />
                         <div>
                            <h4>Albert Flores</h4>
                            <p>I created new branch on Thinco</p>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </main>
       </div>
    </div>
  );
};

export default DashboardPage;
