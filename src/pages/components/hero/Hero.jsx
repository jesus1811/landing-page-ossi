import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <section className={`${styles.hero} hero`}>
        <img className={styles.banner} src="/bannerPincipal.jpg" alt="ossi banner principal" />
        <div className={styles.content}>
          <img className={styles.logo} src="/logo_banner.png" alt="logo ossi" />
          <h2 className={styles.description}>SERVICIO Y SUMINISTRO INTEGRADOS</h2>
          <img className={styles.arrow} src="/arrow.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
