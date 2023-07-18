import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log('list', list);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>

      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`/categories/${id}`}
                  className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
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