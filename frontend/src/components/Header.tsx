import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/volunteer', label: 'Volunteer' },
  { path: '/partners', label: 'Partners' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/img/favicon.png" 
            alt=""
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>
            <span><strong>C</strong>ommunity</span>
            <span><strong>R</strong>esource</span>
            <span><strong>N</strong>etwork</span>
          </span>
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path ? styles.active : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" className={styles.donateButton}>
            Donate
          </Link>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`${styles.mobileNavLink} ${
                    location.pathname === link.path ? styles.active : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                to="/donate"
                className={styles.mobileDonateButton}
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

