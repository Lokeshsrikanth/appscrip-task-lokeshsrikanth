import React from 'react';
import styles from '../styles/SortBar.module.css';

const SortBar = ({ sortOption, setSortOption }) => {
  return (
    <div className={styles.sortBar}>
      <label htmlFor="sort" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={styles.select}
      >
        <option value="recommended">Recommended</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default SortBar;
