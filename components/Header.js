import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { Menu,Search, ShoppingBag,Heart,User,X,} from 'lucide-react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className={styles.header}>
        
        <div className={styles.left}>
          <Menu className={styles.icon} />
        </div>

        <div className={styles.center}>
          <h1 className={styles.logo}>SHOP.CO</h1>
        </div>

        <div className={styles.right}>
          <nav className={styles.navMenu}>
            <ul>
              <li>Shop</li>
              <li>Skills</li>
              <li>Stories</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={styles.icons}>
            <Search className={styles.icon} onClick={() => setShowSearch(!showSearch)} />
            <ShoppingBag className={styles.icon} onClick={() => setShowCart(!showCart)} />
            <Heart className={styles.icon} />
            <User className={styles.icon} />
          </div>
        </div>
      </header>

      {showSearch && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
          />
          <X className={styles.closeSearch} onClick={() => setShowSearch(false)} />
        </div>
      )}
      {showCart && (
        <div className={styles.cartModal}>
          <div className={styles.cartHeader}>
            <h3>Your Cart</h3>
            <X className={styles.closeCart} onClick={() => setShowCart(false)} />
          </div>
          <p className={styles.cartEmpty}>Your cart is empty.</p>
        </div>
      )}
    </>
  );
};

export default Header;
