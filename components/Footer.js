import React from 'react';
import styles from '../styles/Footer.module.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2 className={styles.heading}>Join Our Newsletter</h2>
        <form className={styles.form}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>

      <div className={styles.linksGrid}>
        <div>
          <h4>Shop</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} SHOP.CO — All rights reserved.</p>
        <div className={styles.social}>
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
