import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VolcanoPage from './VolcanoPage';
import GalaxyPage from './GalaxyPage';
import PerfumePage from './PerfumePage';
import ParkPage from './ParkPage';
import LoginPage from './LoginPage';
import ScooterPage from './ScooterPage';
import DashboardPage from './DashboardPage';
import './home-slider.css';

const Home = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="home-slider-container">
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <VolcanoPage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <GalaxyPage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <PerfumePage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <ParkPage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <LoginPage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <ScooterPage />
        </motion.div>
      </div>
      <div className="home-slide">
        <motion.div initial="hidden" animate="visible" viewport={{ amount: 0.3 }} variants={slideVariants} className="w-full min-h-full">
          <DashboardPage />
        </motion.div>
      </div>
      {showHint && (
        <div className="swipe-hint">
          &lt; Swipe left or right &gt;
        </div>
      )}
    </div>
  );
};

export default Home;
