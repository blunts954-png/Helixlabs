import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandInfo}>
            <h3 className={styles.brandTitle}>HELIX LABS</h3>
            <p className={styles.tagline}>Advanced Research Peptides & Analytical Compounds.</p>
            <p className={styles.disclaimerText}>
              All products are strictly for laboratory research use only. 
              Not for human consumption, medical, veterinary, or household use.
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h4>Products</h4>
            <Link href="/shop?cat=peptides">Peptides</Link>
            <Link href="/shop?cat=ancillaries">Ancillaries</Link>
            <Link href="/shop?cat=accessories">Accessories</Link>
          </div>

          <div className={styles.linksColumn}>
            <h4>Information</h4>
            <Link href="/about">Lab Standards</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className={styles.linksColumn}>
            <h4>Connect</h4>
            <Link href="/contact">Support</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} HELIX LABS. All rights reserved.</p>
          <div className={styles.socials}>
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
