'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { ShoppingCart, Menu, X, FlaskConical } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { cartCount, orderMode, setOrderMode } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.jpg" alt="Helix Labs" className={styles.logoImg} />
          <span className={styles.logoText}>HELIX <span className={styles.glow}>LABS</span></span>
        </Link>


        <div className={styles.desktopNav}>
          <Link href="/shop" className={styles.navLink}>Shop Peptides</Link>
          <Link href="/about" className={styles.navLink}>Standards</Link>
          <Link href="/locations" className={styles.navLink}>Locations</Link>
          
          <div className={styles.modeToggle}>
            <button 
              className={orderMode === 'pickup' ? styles.activeMode : ''} 
              onClick={() => setOrderMode('pickup')}
            >
              Pickup
            </button>
            <button 
              className={orderMode === 'delivery' ? styles.activeMode : ''} 
              onClick={() => setOrderMode('delivery')}
            >
              Delivery
            </button>
          </div>

          <Link href="/cart" className={styles.cartIcon}>
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>

        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
          <Link href="/shop" onClick={() => setIsOpen(false)}>Shop Peptides</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>Standards</Link>
          <Link href="/locations" onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/cart" onClick={() => setIsOpen(false)}>Cart ({cartCount})</Link>
        </div>
      )}
    </nav>
  );
}
