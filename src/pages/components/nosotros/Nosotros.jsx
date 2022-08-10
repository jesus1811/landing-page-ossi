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
      <div className={styles.contentValues}>
        <article className={`${styles.value} ${styles.orange}`}>
          <span>
            <img src="/mision.png" alt="" />
          </span>
          <h3>MISIÓN</h3>
          <p>Proporcionar soluciones eficientes en la industria y la excelencia</p>
          <img src="/picoOrange.svg" alt="" className={styles.pico} />
        </article>
        
        <article className={`${styles.value} ${styles.blue}`}>
          <span>
            <img src="/vision.png" alt="" />
          </span>
          <h3>VISIÓN</h3>
          <p>OSSI, comprometidos con la seguridad y calidad en nuestros servicios</p>
          <img src="/picoBlue.svg" alt="" className={styles.pico} />
        </article>
      </div>
    </section>
  );
};

export default Nosotros;
