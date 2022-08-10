import React from "react";
import styles from "./styles.module.css";

const Nosotros = () => {
  return (
    <section className={`${styles.information} about`}>
      <div className={styles.contentInformation}>
        <img src="/bg_QuienesSomos.jpg" alt="" />
        <aside className={styles.informationAside}>
          <h3>¿Quienes Somos?</h3>
          <p>
            Somos una <b>empresa Mexicana</b> especializada en <b>brindar servicios y soluciones eficientes</b> para el
            desarrollo de proyectos a toda la industria.
            <b>Cumpliendo con los estándares de Seguridad, Salud y Medio Ambiente</b> que se requieren, apegados a las
            certificaciones y Normas Nacionales e Internacionales
          </p>
        </aside>
        <aside className={styles.informationAside}>
          <img src="/Esquema_QuienesSomos.png" alt="" />
        </aside>
      </div>
    </section>
  );
};

export default Nosotros;
