import React from 'react';
import { Microscope, ShieldCheck, Microscope as Lab, Award } from 'lucide-react';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className="container">
        <header className={styles.header}>
          <h1>Purity is our Protocol.</h1>
          <p>The Helix Labs mission is to provide the scientific community with the highest fidelity research compounds available.</p>
        </header>

        <section className={styles.vision}>
          <div className={styles.visionGrid}>
            <div className={styles.visionText}>
              <h2>Analytical Excellence</h2>
              <p>
                Founded on the principles of transparency and precision, Helix Labs operates at the intersection of chemistry and innovation. 
                We understand that your research is only as good as your materials. That's why we subject every batch to rigorous 
                HPLC and Mass Spectrometry analysis.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span>99.8%</span>
                  <p>Target Purity</p>
                </div>
                <div className={styles.stat}>
                  <span>100%</span>
                  <p>Batch Verification</p>
                </div>
              </div>
            </div>
            <div className={styles.visionVisual}>
              <div className={styles.glassCard}>
                <Lab size={100} className={styles.green} />
                <p>Advanced Molecular Filtration</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pillars}>
          <div className={styles.pillar}>
            <ShieldCheck size={40} className={styles.green} />
            <h3>Consistency</h3>
            <p>Our synthesis protocols are strict, ensuring minimal batch-to-batch variation for predictable testing outcomes.</p>
          </div>
          <div className={styles.pillar}>
            <Award size={40} className={styles.green} />
            <h3>Quality Control</h3>
            <p>Three-stage verification including internal testing and third-party laboratory cross-validation.</p>
          </div>
          <div className={styles.pillar}>
            <Award size={40} className={styles.green} />
            <h3>Integrity</h3>
            <p>We provide full disclosure of testing results. High-purity peptides for high-stakes research.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
