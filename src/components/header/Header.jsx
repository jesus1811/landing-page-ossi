import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, animateScroll } from "react-scroll";
const Header = () => {
  const [active, setActive] = useState(2);
  const scrollTop = () => {
    setActive(1);
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
          <li className={`${styles.option} ${active === 1 && styles.optionActive}`} onClick={scrollTop}>
            <a>PRINCIPAL</a>
          </li>
          <li className={`${styles.option} ${active === 2 && styles.optionActive}`}>
            <Link to="about" smooth="true" onClick={() => setActive(2)}>
              NOSOTROS
            </Link>
          </li>
          <li className={`${styles.option} ${active === 3 && styles.optionActive}`}>
            <Link to="services" smooth="true" onClick={() => setActive(3)}>
              SERVICIOS
            </Link>
          </li>
          <li className={`${styles.option} ${active === 4 && styles.optionActive}`}>
            <Link to="#" onClick={() => setActive(4)}>
              CATALOGO
            </Link>
          </li>
          <li className={`${styles.option} ${active === 5 && styles.optionActive}`}>
            <Link to="#" onClick={() => setActive(5)}>
              CLIENTES
            </Link>
          </li>
          <li className={`${styles.option} ${active === 6 && styles.optionActive}`}>
            <Link to="#" onClick={() => setActive(6)}>
              CONTACTO
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
