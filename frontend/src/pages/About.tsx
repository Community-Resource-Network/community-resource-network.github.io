import { motion } from 'framer-motion';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import styles from './About.module.css';
import content from '../data/content.json';

export default function About() {
  usePageTitle('About Us');
  const { organization, about, coreValues } = content;

  return (
    <div className={styles.about}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Us</h1>
            <p className={styles.intro}>{about.whoWeAre}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <motion.div
            className={styles.missionContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p className={styles.missionText}>{organization.mission}</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              className={`${styles.valueBlock} ${index % 2 === 1 ? styles.alternate : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.valueIcon}>
                {value.id === 'resourcefulness' && '♻️'}
                {value.id === 'environmental' && '🌱'}
                {value.id === 'growth' && '🌟'}
                {value.id === 'reliability' && '🤝'}
                {value.id === 'community' && '🏘️'}
                {value.id === 'dignity' && '💜'}
              </div>
              <div className={styles.valueContent}>
                <h3>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
                {value.points && (
                  <ul className={styles.valuePoints}>
                    {value.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {value.servedGroups && (
                  <div className={styles.servedGroups}>
                    <p>We serve:</p>
                    <ul className={styles.groupsList}>
                      {value.servedGroups.map((group, i) => (
                        <li key={i}>{group}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Organization Info */}
      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Organization Details</h3>
              <ul className={styles.infoList}>
                <li>
                  <strong>Federal Tax ID:</strong> {organization.federalTaxId}
                </li>
                <li>
                  <strong>UBI:</strong> {organization.ubi}
                </li>
                <li>
                  <strong>Status:</strong> 501(c)(3) Non-Profit
                </li>
                <li>
                  <strong>Established:</strong> {organization.founded}
                </li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Contact Address</h3>
              <address className={styles.address}>
                <p>{organization.address.line1}</p>
                <p>{organization.address.line2}</p>
                <p>{organization.address.city}, {organization.address.state} {organization.address.zip}</p>
              </address>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Land Acknowledgement */}
      <section className={styles.acknowledgement}>
        <div className={styles.container}>
          <motion.div
            className={styles.acknowledgementContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Acknowledgement of Our Indigenous Neighbors</h3>
            <p>{about.acknowledgement}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get Involved</h2>
            <p>Join our mission to rescue surplus food and support families in need.</p>
            <Button to="/volunteer" size="lg">Become a Volunteer</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

