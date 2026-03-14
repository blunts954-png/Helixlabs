'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Trash2, Minus, Plus, MapPin, Truck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from './cart.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, orderMode, setOrderMode, zipCode, setZipCode, location, setLocation } = useStore();

  const [localZip, setLocalZip] = useState(zipCode || '');

  const deliveryFee = orderMode === 'delivery' ? 15 : 0;
  const tax = cartTotal * 0.08;
  const total = cartTotal + deliveryFee + tax;

  const pickupLocations = [
    { id: 'hq', name: 'Helix HQ Fulfillment', address: '123 Tech Pkwy, Austin, TX' },
    { id: 'west', name: 'West Coast Distro', address: '456 Lab Rd, Irvine, CA' },
  ];

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.emptyCart}`}>
        <h1>Your Repository is Empty</h1>
        <p>You haven't added any research materials to your cart yet.</p>
        <Link href="/shop" className={styles.shopBtn}>Browse Compounds</Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className="container">
        <h1 className={styles.title}>Research Repository</h1>
        
        <div className={styles.layout}>
          <div className={styles.itemsList}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                </div>
                <button 
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.modeSelection}>
              <h3>Acquisition Method</h3>
              <div className={styles.modeTabs}>
                <button 
                  className={orderMode === 'delivery' ? styles.activeTab : ''}
                  onClick={() => setOrderMode('delivery')}
                >
                  <Truck size={18} /> Delivery
                </button>
                <button 
                  className={orderMode === 'pickup' ? styles.activeTab : ''}
                  onClick={() => setOrderMode('pickup')}
                >
                  <MapPin size={18} /> Pickup
                </button>
              </div>

              {orderMode === 'delivery' ? (
                <div className={styles.modeContent}>
                  <label>Service Area ZIP Code</label>
                  <div className={styles.zipInputWrapper}>
                    <input 
                      type="text" 
                      placeholder="Enter ZIP" 
                      value={localZip}
                      onChange={(e) => setLocalZip(e.target.value)}
                    />
                    <button onClick={() => setZipCode(localZip)}>Validate</button>
                  </div>
                  {zipCode && <p className={styles.successText}>✓ Delivery available in your zone.</p>}
                </div>
              ) : (
                <div className={styles.modeContent}>
                  <label>Select Pickup Point</label>
                  <select 
                    value={location || ''} 
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="" disabled>Choose a location</option>
                    {pickupLocations.map((loc) => (
                      <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                  </select>
                  {location && <p className={styles.locAddress}>
                    {pickupLocations.find(l => l.id === location)?.address}
                  </p>}
                </div>
              )}
            </div>

            <div className={styles.summaryCard}>
              <h3>Summary</h3>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Acquisition Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Laboratory Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link href="/checkout" className={styles.checkoutBtn}>
                Proceed to Checkout <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
