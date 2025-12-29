import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Contact.module.css';
import content from '../data/content.json';

export default function Contact() {
  usePageTitle('Contact Us');
  const { organization } = content;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load Bootstrap Studio Smart Forms script
    const script = document.createElement('script');
    script.src = '/assets/js/smart-forms.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for messages from Bootstrap Studio form handler
    const handleMessage = (event: MessageEvent) => {
      // Bootstrap Studio sends messages with operation status
      if (event.data?.operation === 'showMessage') {
        if (event.data.status === 'loading') {
          setIsSubmitting(true);
        } else if (event.data.status === 'success') {
          setIsSubmitting(false);
          setIsSubmitted(true);
          // Reset form after successful submission
          if (formRef.current) {
            formRef.current.reset();
            setFormState({ name: '', email: '', message: '' });
          }
        } else if (event.data.status === 'error') {
          setIsSubmitting(false);
          // You could add error state handling here if needed
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="/assets/js/smart-forms.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.contact}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p className={styles.intro}>
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.infoCard}>
                <h2>Get in Touch</h2>
                <p>
                  Use the form to inquire about becoming a Contributing Partner 
                  or for any other questions. To ensure quick processing, please 
                  leave a detailed message.
                </p>
                <p className={styles.volunteerNote}>
                  To contact us about becoming a volunteer member, please see the{' '}
                  <Link to="/volunteer">Volunteer Opportunities page</Link>.
                </p>
              </div>

              <div className={styles.addressCard}>
                <h3>Mailing Address</h3>
                <address>
                  <p>{organization.address.line1}</p>
                  <p>{organization.address.line2}</p>
                  <p>{organization.address.city}, {organization.address.state} {organization.address.zip}</p>
                </address>
              </div>

              <div className={styles.quickLinks}>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/volunteer">
                      <span>🙋</span>
                      <span>Volunteer Application</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners">
                      <span>🤝</span>
                      <span>Partnership Opportunities</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/donate">
                      <span>💚</span>
                      <span>Make a Donation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className={styles.formColumn}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.formCard}>
                {isSubmitted ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>✓</span>
                    <h2>Thank You!</h2>
                    <p>
                      Your message has been sent. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    data-bss-recipient="5c9bf6ec469b800b59c422dc7a090ce7"
                    data-bss-subject="CRN Website Message"
                    className={styles.form}
                  >
                    <h2>Send a Message</h2>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

