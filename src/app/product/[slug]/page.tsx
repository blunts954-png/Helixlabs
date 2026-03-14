'use client';

import React, { use } from 'react';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import { ShieldCheck, ArrowLeft, Download, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import styles from './product.module.css';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { addToCart } = useStore();
  
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1>Compound Not Found</h1>
        <p>The requested research material does not exist in our database.</p>
        <Link href="/shop" className={styles.backBtn}>Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className={styles.product}>
      <div className="container">
        <Link href="/shop" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
        
        <div className={styles.layout}>
          {/* Main Visual */}
          <div className={styles.visualColumn}>
            <div className={styles.imageCard}>
              <img src={product.image} alt={product.name} className={styles.mainImage} />
              <div className={styles.floatingBadge}>{product.purity}</div>
            </div>
            
            <div className={styles.coaBox}>
              <div className={styles.coaText}>
                <h4>Analytical Verification</h4>
                <p>Lot #HX-{Math.floor(Math.random() * 10000)} Verification Report</p>
              </div>
              <button className={styles.downloadBtn}>
                <Download size={18} />
                PDF
              </button>
            </div>
          </div>

          {/* Details Column */}
          <div className={styles.detailsColumn}>
            <div className={styles.header}>
              <span className={styles.category}>{product.category} Research Compound</span>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.dosageLabel}>{product.dosage} / Vial</p>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
              <div className={styles.inventoryStatus}>
                <div className={styles.dot} /> Available for Research
              </div>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.addBtn}
                onClick={() => addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                })}
              >
                Acquire Compound
              </button>
            </div>

            <div className={styles.complianceBox}>
              <AlertCircle className={styles.alertIcon} size={20} />
              <p>{product.compliance}</p>
            </div>

            <div className={styles.tabs}>
              <div className={styles.tabContent}>
                <h3>Technical Summary</h3>
                <p>{product.description}</p>
                
                <ul className={styles.specs}>
                  <li><span>Molecular Mass:</span> 2354.7 g/mol</li>
                  <li><span>Purity (HPLC):</span> {product.purity}</li>
                  <li><span>Form:</span> Lyophilized Powder</li>
                  <li><span>Storage:</span> -20°C Recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
