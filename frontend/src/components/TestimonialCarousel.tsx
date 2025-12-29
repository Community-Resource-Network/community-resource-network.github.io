import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialCarousel.module.css';
import testimonialData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  type: string;
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials: Testimonial[] = testimonialData.testimonials;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={goToPrev}
        aria-label="Previous testimonial"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={styles.testimonial}
          >
            <blockquote className={styles.quote}>
              <span className={styles.quoteIcon}>"</span>
              {currentTestimonial.quote}
            </blockquote>
            <cite className={styles.author}>
              <span className={styles.authorType}>{currentTestimonial.author}</span>
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      <div className={styles.dots}>
        {testimonials.slice(0, 8).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex % 8 ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

