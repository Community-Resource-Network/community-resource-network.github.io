import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import styles from './NotFound.module.css';

export default function NotFound() {
  usePageTitle('Page Not Found');

  return (
    <div className={styles.notFound}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.errorCode}>404</span>
        <h1>Page Not Found</h1>
        <p>
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>
        <div className={styles.actions}>
          <Button to="/" size="lg">Go Home</Button>
          <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
        </div>
        <nav className={styles.links}>
          <p>Or try one of these:</p>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}

