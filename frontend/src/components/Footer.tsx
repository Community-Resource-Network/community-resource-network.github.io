import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import content from '../data/content.json';

export default function Footer() {
  const { organization, about } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brandSection}>
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
              <p className={styles.mission}>{organization.tagline}</p>
              <div className={styles.taxInfo}>
                <p>501(c)(3) Non-Profit Organization</p>
                <p>Federal Tax ID: {organization.federalTaxId}</p>
              </div>
            </div>

            <div className={styles.linksSection}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <nav className={styles.footerNav}>
                <Link to="/about">About Us</Link>
                <Link to="/volunteer">Volunteer</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className={styles.contactSection}>
              <h4 className={styles.sectionTitle}>Contact</h4>
              <address className={styles.address}>
                <p>{organization.address.line1}</p>
                <p>{organization.address.line2}</p>
                <p>{organization.address.city}, {organization.address.state} {organization.address.zip}</p>
              </address>
            </div>

            <div className={styles.acknowledgement}>
              <h4 className={styles.sectionTitle}>Land Acknowledgement</h4>
              <p className={styles.acknowledgementText}>{about.acknowledgement}</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {currentYear} {organization.name}. All rights reserved.
            </p>
            <p className={styles.credits}>{about.specialThanks}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

