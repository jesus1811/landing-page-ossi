import React from "react";
import styles from "./styles.module.css";
import { Link, animateScroll } from "react-scroll";
const Header = () => {
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className={styles.header}>
      <img className={styles.bgHeader} src="/bannerPincipal.jpg" alt="" />
      <div className={styles.content}>
        <div className={styles.containerLogo}>
          <img src="/logo_menu.png" alt="ossi icon" />
        </div>
        <nav className={styles.navBar}>
          <li className={`${styles.option} ${styles.optionActive}`} onClick={scrollTop}>
            <a>PRINCIPAL</a>
          </li>
          <li className={styles.option}>
            <Link to="about" smooth="true">
              NOSOTROS
            </Link>
          </li>
          <li className={styles.option}>
            <Link to="services" smooth="true">SERVICIOS</Link>
          </li>
          <li className={styles.option}>
            <Link to="#">CATALOGO</Link>
          </li>
          <li className={styles.option}>
            <Link to="#">CLIENTES</Link>
          </li>
          <li className={styles.option}>
            <Link to="#">CONTACTO</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
