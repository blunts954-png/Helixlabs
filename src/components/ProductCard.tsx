'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { Product } from '@/data/products';
import { Plus } from 'lucide-react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.purityBadge}>{product.purity}</div>
        </div>
      </Link>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{product.category}</span>
          <h3 className={styles.name}>{product.name} <span className={styles.dosage}>{product.dosage}</span></h3>
        </div>
        
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button 
            className={styles.addBtn}
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image
            })}
          >
            <Plus size={18} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
