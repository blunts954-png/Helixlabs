'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import styles from './shop.module.css';

export default function ShopPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

  const { orderMode } = useStore();

  return (
    <div className={styles.shop}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h1>Advanced Research Catalog</h1>
          <p>Browse our selection of high-purity peptides and biochemicals.</p>
          <div className={styles.inventoryStatus}>
            <div className={styles.dot} />
            Optimized for {orderMode === 'pickup' ? 'Local Facility Pickup' : 'Regional Express Delivery'}
          </div>
        </header>


        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="Search compounds (e.g. MOTS-C)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className={styles.noResults}>
              <h3>No matching compounds found.</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
