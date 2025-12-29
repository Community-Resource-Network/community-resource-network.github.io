import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Home.module.css';
import content from '../data/content.json';

export default function Home() {
  usePageTitle('Rescuing Surplus, Rebuilding Communities');
  const { organization, stats, coreValues } = content;

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern} />
        </div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>Since {organization.founded}</span>
            <h1 className={styles.heroTitle}>
              {organization.name}
            </h1>
            <p className={styles.heroTagline}>{organization.tagline}</p>
            <p className={styles.heroMission}>{organization.mission}</p>
          </motion.div>
          
          <motion.div 
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/volunteer" size="lg">Become a Volunteer</Button>
            <Button to="/donate" variant="outline" size="lg">Support Our Mission</Button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.statNumber}>{stats.poundsSaved}</span>
              <span className={styles.statLabel}>Pounds saved annually</span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={styles.statNumber}>{stats.householdsServed}</span>
              <span className={styles.statLabel}>Households served</span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className={styles.statNumber}>{stats.operationDays}</span>
              <span className={styles.statLabel}>Including holidays</span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Volunteer-run</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {coreValues.slice(0, 6).map((value, index) => (
              <motion.div
                key={value.id}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.valueIcon}>
                  {value.id === 'resourcefulness' && '♻️'}
                  {value.id === 'environmental' && '🌱'}
                  {value.id === 'growth' && '🌟'}
                  {value.id === 'reliability' && '🤝'}
                  {value.id === 'community' && '🏘️'}
                  {value.id === 'dignity' && '💜'}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.valuesAction}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className={styles.learnMore}>
              Learn more about our mission →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Voices from Our Community</h2>
            <p>Stories from volunteers and recipients</p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Make a Difference?</h2>
            <p>
              Join our community of volunteers and help us rescue surplus food 
              for families in need. Every contribution matters.
            </p>
            <div className={styles.ctaButtons}>
              <Button to="/volunteer" size="lg">Join as Volunteer</Button>
              <Button to="/partners" variant="secondary" size="lg">Become a Partner</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

