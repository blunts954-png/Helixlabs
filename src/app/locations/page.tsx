'use client';

import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import Link from 'next/link';
import styles from './locations.module.css';

export default function LocationsPage() {
  const centers = [
    {
      id: 'central',
      name: 'Helix Central Repository (TX)',
      address: '123 Tech Parkway, Suite 500, Austin, TX 78701',
      hours: 'Mon-Fri: 08:00 - 18:00',
      phone: '+1 (512) 555-0199',
    },
    {
      id: 'pacific',
      name: 'Pacific Analytical Hub (CA)',
      address: '456 Innovation Drive, Irvine, CA 92612',
      hours: 'Mon-Fri: 09:00 - 17:00',
      phone: '+1 (949) 555-0244',
    }
  ];

  return (
    <div className={styles.locations}>
      <div className="container">
        <header className={styles.header}>
          <h1>Fulfillment Network</h1>
          <p>Strategic localized distribution for rapid research deployment.</p>
        </header>

        <div className={styles.grid}>
          {centers.map((center) => (
            <div key={center.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <MapPin className={styles.icon} />
                <h3>{center.name}</h3>
              </div>
              
              <div className={styles.details}>
                <p><strong>Address:</strong> {center.address}</p>
                <div className={styles.row}>
                  <Clock size={16} /> <span>{center.hours}</span>
                </div>
                <div className={styles.row}>
                  <Phone size={16} /> <span>{center.phone}</span>
                </div>
              </div>

              <div className={styles.actions}>
                <Link href={`/shop?loc=${center.id}`} className={styles.orderBtn}>
                  Browse Local Inventory
                </Link>
                <button className={styles.navBtn}>
                  <Navigation size={18} /> Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
