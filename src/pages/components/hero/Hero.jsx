import React from "react";
import styles from "./styles.module.css";

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
        {/* <img src="/arrow.png" alt="" /> */}
      </section>
      <section className={`${styles.information} about`}>
        <div className={styles.contentInformation}>
          <img src="/bg_QuienesSomos.jpg" alt="" />
          <aside className={styles.informationAside}>
            <h3>¿Quienes Somos?</h3>
            <p>
              Somos una <b>empresa Mexicana</b> especializada en <b>brindar servicios y soluciones eficientes</b> para
              el desarrollo de proyectos a toda la industria.
              <b>Cumpliendo con los estándares de Seguridad, Salud y Medio Ambiente</b> que se requieren, apegados a las
              certificaciones y Normas Nacionales e Internacionales
            </p>
          </aside>
          <aside className={styles.informationAside}>
            <img src="/Esquema_QuienesSomos.png" alt="" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default Hero;
