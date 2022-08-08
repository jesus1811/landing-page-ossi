import React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.banner} src="/bannerPincipal.jpg" alt="ossi banner principal" />
      <div className={styles.content}>
        <img className={styles.logo} src="/logo_banner.png" alt="logo ossi" />
        <h2 className={styles.description}>SERVICIO Y SUMINISTRO INTEGRADOS</h2>
      </div>
    </div>
  );
};

export default Hero;
