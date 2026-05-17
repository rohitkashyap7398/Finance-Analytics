import React from 'react';
import { motion } from 'framer-motion';
import { Bug } from 'lucide-react';
import './SpiderNetwork.css';

function SpiderNetwork() {
  const nodes = [
    { id: 1, label: 'Criteria', x: 20, y: 30, delay: 0 },
    { id: 2, label: 'Search', x: 80, y: 40, delay: 0.5 },
    { id: 3, label: 'Your Site', x: 25, y: 70, delay: 1 },
    { id: 4, label: 'Index', x: 75, y: 80, delay: 1.5 },
  ];

  return (
    <div className="spider-network-container">
       <div className="spider-network-bg"></div>
       
       {/* SVG Lines connecting everything */}
       <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {nodes.map(node => (
            <motion.line 
              key={`line-${node.id}`}
              x1="50" y1="50" x2={node.x} y2={node.y} 
              stroke="rgba(102, 255, 0, 0.4)" 
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, delay: node.delay }}
            />
          ))}
          {/* Subtle background web lines */}
          <line x1="20" y1="30" x2="25" y2="70" stroke="rgba(102, 255, 0, 0.15)" strokeWidth="0.1" />
          <line x1="80" y1="40" x2="75" y2="80" stroke="rgba(102, 255, 0, 0.15)" strokeWidth="0.1" />
          <line x1="25" y1="70" x2="75" y2="80" stroke="rgba(102, 255, 0, 0.1)" strokeWidth="0.1" />
          <line x1="20" y1="30" x2="80" y2="40" stroke="rgba(102, 255, 0, 0.1)" strokeWidth="0.1" />
       </svg>

       {/* Center Spider/Bot */}
       <motion.div 
         className="spider-center"
         animate={{ y: [-15, 15, -15] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       >
          <div className="spider-glow"></div>
          <div className="spider-legs">
             {/* Left legs */}
             <div className="leg leg-l1"></div>
             <div className="leg leg-l2"></div>
             <div className="leg leg-l3"></div>
             {/* Right legs */}
             <div className="leg leg-r1"></div>
             <div className="leg leg-r2"></div>
             <div className="leg leg-r3"></div>
          </div>
          <div className="spider-body">
             <div className="spider-eye eye-1"></div>
             <div className="spider-eye eye-2"></div>
             <div className="spider-eye eye-3"></div>
             <div className="spider-eye eye-4"></div>
             <div className="spider-eye eye-5"></div>
             <div className="spider-eye eye-6"></div>
          </div>
          <div className="spider-text-label">
             Finance Analytics Bot ➔
          </div>
       </motion.div>

       {/* Nodes */}
       {nodes.map(node => (
         <motion.div 
            key={node.id}
            className="network-node"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="node-tile">
               <span className="node-label">{node.label}</span>
            </div>
            {node.id === 3 && (
              <svg style={{ position: 'absolute', top: '100%', left: '-50%', width: '100px', height: '100px', pointerEvents: 'none' }}>
                 <path d="M 80 0 Q 30 50 20 80" fill="transparent" stroke="white" strokeWidth="2" />
                 <polygon points="15,80 25,75 25,85" fill="white" />
              </svg>
            )}
         </motion.div>
       ))}
    </div>
  );
}

export default SpiderNetwork;
