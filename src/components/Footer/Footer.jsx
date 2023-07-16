import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Footer.module.css';
import LOGO from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="footer logo img" />
        </Link>
      </div>

      <div className={styles.rights}>
        Defeloped by Dmitrii Pavlovich magistrigusti@gmail.com
      </div>

      <div className={styles.socials}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>

        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>

        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </div>
    </section>
  );
};


export default Footer;