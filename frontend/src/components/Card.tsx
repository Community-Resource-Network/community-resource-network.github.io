import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

export default function Card({ children, icon, title, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
}

