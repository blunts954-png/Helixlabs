'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FlaskConical, ShieldCheck, Zap, Microscope } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import styles from './page.module.css';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <div className={styles.badge}>Research Grade Alpha</div>
            <h1 className={styles.title}>
              ADVANCED <span className={styles.accent}>PEPTIDE</span> <br />
              SYSTEMS.
            </h1>
            <p className={styles.subtitle}>
              High-purity laboratory compounds. Optimized for molecular consistency, 
              transparency, and rigorous analytical research.
            </p>
            <div className={styles.heroActions}>
              <Link href="/shop" className={styles.primaryBtn}>Explore Peptides</Link>
              <Link href="/about" className={styles.secondaryBtn}>Verify Lab Standards</Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.heroVisual}
          >
            <div className={styles.molecularBg}>
              <img src="/logo.jpg" alt="Helix Labs Logo" className={styles.mainLogo} />
              <div className={styles.orbital} />
              <div className={styles.orbital2} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Section */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Research Compounds</h2>
            <Link href="/shop" className={styles.viewAll}>View Complete Catalog</Link>
          </div>
          
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className={styles.pillars}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillar}>
              <ShieldCheck className={styles.pillarIcon} />
              <h3>99.8% Purity</h3>
              <p>Every batch undergoes HPLC & Mass Spec verification to ensure absolute fidelity.</p>
            </div>
            <div className={styles.pillar}>
              <Microscope className={styles.pillarIcon} />
              <h3>Analytical Transparency</h3>
              <p>Download full COA reports for every lot. We hide nothing from the researcher.</p>
            </div>
            <div className={styles.pillar}>
              <Zap className={styles.pillarIcon} />
              <h3>Rapid Processing</h3>
              <p>Localized fulfillment centers for fast pickup and delivery to your laboratory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Strip */}
      <div className={styles.complianceStrip}>
        <div className="container">
          <p>
            <strong>ATTENTION:</strong> ALL HELIX LABS PRODUCTS ARE SOLD STRICTLY FOR LABORATORY RESEARCH PURPOSES ONLY. 
            NOT FOR HUMAN CONSUMPTION.
          </p>
        </div>
      </div>
    </div>
  );
}
