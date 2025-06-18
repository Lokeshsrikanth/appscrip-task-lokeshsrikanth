import React, { useState } from 'react';
import styles from '../styles/SidebarFilters.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

const handleCheckbox = (option) => {
    const updated = checkedItems.includes(option)
      ? checkedItems.filter((o) => o !== option)
      : [...checkedItems, option];

    setCheckedItems(updated);
    onChange(title.toLowerCase(), updated);
  };

  return (
    <div className={styles.filterSection}>
      <div
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((item, idx) => (
            <li key={idx} className={styles.optionItem}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={checkedItems.includes(item)}
                  onChange={() => handleCheckbox(item)}
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SidebarFilters = ({ onApplyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

const handleChange = (section, values) => {
    setSelectedFilters((prev) => ({ ...prev, [section]: values }));
  };

const handleApply = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <aside className={styles.sidebar}>
      <FilterSection title="Category" options={['T-shirts', 'Shirts', 'Jeans', 'Shoes']} onChange={handleChange} />
      <FilterSection title="Gender" options={['Men', 'Women', 'Unisex']} onChange={handleChange} />
      <FilterSection title="Color" options={['Red', 'Blue', 'Black', 'White']} onChange={handleChange} />
      <FilterSection title="Price" options={['Under $50', '$50 - $100', 'Above $100']} onChange={handleChange} />
      <FilterSection title="Rating" options={['4 stars & up', '3 stars & up']} onChange={handleChange} />
      <FilterSection title="Discount" options={['10%', '20%', '30%', '50%']} onChange={handleChange} />
      <FilterSection title="Availability" options={['In Stock']} onChange={handleChange} />

      <button className={styles.applyButton} onClick={handleApply}>
        Apply Filters
      </button>
    </aside>
  );
};

export default SidebarFilters;
