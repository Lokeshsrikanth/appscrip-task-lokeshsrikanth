import React from 'react';
import styles from '../styles/PageHeading.module.css';

const PageHeading = () => {
  return (
    <div className={styles.pageHeading}>
      <h2 className={styles.title}>EXPLORE OUR PRODUCTS</h2>
      <p className={styles.subtext}>
       Experience elegant, responsive layouts. No clutter, just refined design. Smart spacing and clean structure make your interface truly enjoyable.
      </p>
    </div>
  );
};

export default PageHeading;
