import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Partners.module.css';
import content from '../data/content.json';

export default function Partners() {
  usePageTitle('Partner With Us');
  const { partners } = content;

  return (
    <div className={styles.partners}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Partner With Us</h1>
            <p className={styles.intro}>
              We'd love to partner with you.{' '}
              <Link to="/contact">Contact us</Link> to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className={styles.types}>
        <div className={styles.container}>
          <div className={styles.typeGrid}>
            {/* Contributing Partners */}
            <motion.div
              className={styles.typeCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.typeIcon}>🏪</div>
              <h2>{partners.contributing.title}</h2>
              <p>{partners.contributing.description}</p>
              <div className={styles.typeNote}>
                <span>💡</span>
                <p>{partners.contributing.note}</p>
              </div>
            </motion.div>

            {/* Receiving Partners */}
            <motion.div
              className={styles.typeCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.typeIcon}>🤝</div>
              <h2>{partners.receiving.title}</h2>
              <p>{partners.receiving.description}</p>
              
              <div className={styles.partnerLists}>
                <div className={styles.partnerList}>
                  <h4>Organizations</h4>
                  <ul>
                    {partners.receiving.organizations.map((org, i) => (
                      <li key={i}>{org}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.partnerList}>
                  <h4>Individuals & Families</h4>
                  <ul>
                    {partners.receiving.individuals.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Financial Partners */}
            <motion.div
              className={styles.typeCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.typeIcon}>💚</div>
              <h2>{partners.financial.title}</h2>
              <p>{partners.financial.description}</p>
              
              <div className={styles.taskList}>
                <h4>This includes:</h4>
                <ul>
                  {partners.financial.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.typeNote}>
                <span>✨</span>
                <p>{partners.financial.note}</p>
              </div>

              <div className={styles.donateLink}>
                <Button to="/donate" variant="secondary">
                  Make a Donation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <motion.h2
            className={styles.testimonialsTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Impact Stories
          </motion.h2>
          <TestimonialCarousel />
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
            <h2>Interested in Partnering?</h2>
            <p>
              Whether you're a business looking to donate surplus goods or an 
              organization that serves those in need, we'd love to hear from you.
            </p>
            <Button to="/contact" size="lg">Contact Us</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

