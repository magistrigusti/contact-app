import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Header.module.css';
import LOGO from '../../images/logo.svg';
import AVATAR from "../../images/avatar.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo img" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avater} styles={{backgroundImage: `url(${AVATAR})`}} />

          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icons}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>

          <div className={styles.input}>
            <input type="search" name="searcg"
                placeholder="Search for anything. . . ."
                autoComplete="off"
                onChange={() => {}}
                value=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;