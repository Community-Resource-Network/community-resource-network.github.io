import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import TestimonialCarousel from '../components/TestimonialCarousel';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Volunteer.module.css';
import content from '../data/content.json';

export default function Volunteer() {
  usePageTitle('Volunteer Opportunities');
  const { volunteer, organization } = content;

  return (
    <div className={styles.volunteer}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Volunteer Opportunities</h1>
            <p className={styles.intro}>{volunteer.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className={styles.cards}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>
            <Card icon="📋" title="Volunteer Tasks" delay={0}>
              <p>Our volunteers handle essential operations including:</p>
              <ul>
                {volunteer.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </Card>

            <Card icon="⏰" title="Schedule & Benefits" delay={0.1}>
              <p>{volunteer.schedule}</p>
              <p style={{ marginTop: '1rem' }}>
                In exchange, volunteer members are eligible to receive:
              </p>
              <ul>
                {volunteer.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </Card>

            <Card icon="✅" title="Requirements" delay={0.2}>
              <p>To become a volunteer member, you'll need:</p>
              <ul>
                {volunteer.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--color-stone)' }}>
                If a suitable opening exists after reviewing your application, we will contact you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className={styles.apply}>
        <div className={styles.container}>
          <motion.div
            className={styles.applyContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Join Our Team?</h2>
            <p>
              Submit your application today and become part of our community 
              of dedicated volunteers making a difference.
            </p>
            <Button href={organization.volunteerApplicationUrl} size="lg">
              Apply Now
            </Button>
          </motion.div>
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
            From Our Volunteers & Recipients
          </motion.h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqGrid}>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>How much time do I need to commit?</h3>
              <p>
                Volunteer members commit to working 3-5 scheduled hours per week.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Do I need special skills?</h3>
              <p>
                No special skills required! We provide training. You just need 
                reliable transportation and a willingness to help.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>What areas do you serve?</h3>
              <p>
                We serve the greater Puget Sound area with teams in multiple locations.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>Can I receive donations as a volunteer?</h3>
              <p>
                Yes! Many volunteer members are eligible to receive a portion of 
                the donations they help process and distribute.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

