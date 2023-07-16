import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>

      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>
              Link
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a className={styles.link} href="/help" target="_blank">Help</a>

        <a className={styles.link}
          href="/terms"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >Terms & Conditions</a>
      </div>
    </section>
  );
};


export default Sidebar;