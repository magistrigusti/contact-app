import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Products.module.css';

const Products = ({ title, products = [] }) => {
  return (
    <section>{title && <h2>{title}</h2>}
      <div className={styles.list}>
        {products.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link className={styles.products} to={`/products/${id}`} key={id}>
            <div className={styles.image} style={{ backgroundImage: `url(${images[0]})`}} />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{cat}</div>

              <div className={styles.info}>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
};


export default Products;