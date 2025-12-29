import { useEffect } from 'react';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Donate.module.css';
import content from '../data/content.json';

export default function Donate() {
  usePageTitle('Donate');
  const { organization } = content;

  useEffect(() => {
    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={styles.donate}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.badge}>501(c)(3) Non-Profit</span>
            <h1>Support Our Mission</h1>
            <p className={styles.intro}>
              Your donation helps us rescue surplus food and deliver it to 
              families in need throughout the Puget Sound area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Info Column */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.infoCard}>
                <h2>100% Tax-Deductible</h2>
                <p>
                  All donations are tax-deductible to the full extent allowed 
                  under the law.
                </p>
                <div className={styles.taxInfo}>
                  <span>Federal Tax ID:</span>
                  <strong>{organization.federalTaxId}</strong>
                </div>
              </div>

              <div className={styles.impactCard}>
                <h3>Your Impact</h3>
                <ul className={styles.impactList}>
                  <li>
                    <span className={styles.impactIcon}>🥬</span>
                    <div>
                      <strong>2.2M+ pounds</strong>
                      <p>of food rescued annually</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.impactIcon}>👨‍👩‍👧‍👦</span>
                    <div>
                      <strong>500+ households</strong>
                      <p>served in Puget Sound</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.impactIcon}>🌱</span>
                    <div>
                      <strong>Zero waste</strong>
                      <p>commitment to sustainability</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.promiseCard}>
                <h3>Our Promise</h3>
                <p>
                  CRN has NO paid staff. Our streamlined business model ensures 
                  that monetary donations are directed toward essential operating 
                  expenses, not salaries.
                </p>
                <p className={styles.quote}>
                  We make the most of every dollar just as we make the most of 
                  every tomato, every orange, every egg, and every brussel sprout.
                </p>
              </div>
            </motion.div>

            {/* Donate Column */}
            <motion.div
              className={styles.donateColumn}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.donateCard}>
                <div className={styles.donateHeader}>
                  <img 
                    src="/assets/img/favicon.png" 
                    alt="CRN Logo"
                    className={styles.donateLogo}
                  />
                  <h2>Donate to CRN</h2>
                </div>
                
                <div className={styles.stripeContainer}>
                  {/* @ts-expect-error Stripe custom element */}
                  <stripe-buy-button
                    buy-button-id={organization.stripeButtonId}
                    publishable-key={organization.stripePublishableKey}
                  />
                </div>

                <div className={styles.secureNote}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>Secure payment powered by Stripe</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Ways */}
      <section className={styles.alternatives}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Other Ways to Help</h2>
            <div className={styles.altGrid}>
              <div className={styles.altCard}>
                <span className={styles.altIcon}>📬</span>
                <h3>Mail a Check</h3>
                <address>
                  {organization.address.line1}<br />
                  {organization.address.line2}<br />
                  {organization.address.city}, {organization.address.state} {organization.address.zip}
                </address>
              </div>
              <div className={styles.altCard}>
                <span className={styles.altIcon}>🙋</span>
                <h3>Volunteer</h3>
                <p>Give your time and make a direct impact in your community.</p>
                <a href="/volunteer">Learn more →</a>
              </div>
              <div className={styles.altCard}>
                <span className={styles.altIcon}>🏪</span>
                <h3>Partner With Us</h3>
                <p>Businesses can donate surplus goods and reduce waste.</p>
                <a href="/partners">Learn more →</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

