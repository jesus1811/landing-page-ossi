import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.containerLogo}>
        <img src="/logo_menu.png" alt="ossi icon" />
      </div>
      <nav className={styles.navBar}>
        <li className={`${styles.option} ${styles.optionActive}`}>
          <a href="#">PRINCIPAL</a>
        </li>
        <li className={styles.option}>
          <a href="#">NOSOTROS</a>
        </li>
        <li className={styles.option}>
          <a href="#">SERVICIOS</a>
        </li>
        <li className={styles.option}>
          <a href="#">CATALOGO</a>
        </li>
        <li className={styles.option}>
          <a href="#">CLIENTES</a>
        </li>
        <li className={styles.option}>
          <a href="#">CONTACTO</a>
        </li>
      </nav>
    </div>
  );
};

export default Header;
