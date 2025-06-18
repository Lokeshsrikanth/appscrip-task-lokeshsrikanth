import React, { useState } from 'react';
import styles from '../styles/ProductCard.module.css';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
const [liked, setLiked] = useState(false); 

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image}alt={product.title}className={styles.image}/>
        <button  className={`${styles.wishlistBtn} ${liked ? styles.liked : ''}`}  onClick={() => setLiked(!liked)}aria-label="Toggle Wishlist" >
          <Heart size={18} strokeWidth={1.5} fill={liked ? '#ff4d6d' : 'none'} />
        </button>
      </div>

      <div className={styles.details}>
        <p className={styles.category}>{product.category.toUpperCase()}</p>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
