import React from "react";
import styles from "./styles.module.css";

const Servicios = () => {
  return (
    <div className={styles.servicios}>
      <div className={styles.content}>
        <h2 className={styles.title}>Servicios</h2>
        <div className={styles.contentCard}>
          <article className={`${styles.card} ${styles.blue}`}>
            <h3>Mantenimiento</h3>
            <p>a embarcaciones e instalaciones costa afuera</p>
          </article>
          <article className={`${styles.card} ${styles.brown}`}>
            <h3>Servicios</h3>
            <p>a embarcaciones e instalaciones costa afuera</p>
          </article>
          <article className={`${styles.card} ${styles.green}`}>
            <h3>Mantenimiento</h3>
            <p>a infraestructuras</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
