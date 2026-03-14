'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.overlay} />
          <motion.div 
            className={styles.content}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.logoWrapper}>
              <img src="/logo.jpg" alt="Helix Labs Logo" className={styles.logo} />
              <div className={styles.glow} />
            </div>
            <motion.div 
              className={styles.loader}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "linear" }}
            />
            <p className={styles.status}>INITIALIZING RESEARCH PROTOCOLS...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
