import React from "react";
import styles from "./styles.module.css";

const Clientes = () => {
  return (
    <section className={`${styles.clientes} clientes`}>
      <div className={styles.content}>
        <h3>Clientes</h3>
        <div className={styles.contentCard}>
          <article className={styles.card}>
            <img src="/logos/NavieraArmamex_gris.jpg" alt="naviera armamex" className={styles.disable} />
            <img src="/logos/NavieraArmamex_color.jpg" alt="naviera armamex" className={styles.active} />
          </article>
          <article className={styles.card}>
            <img src="/logos/BaruOffshore_gris.jpg" alt="baru off shore" className={styles.disable} />
            <img src="/logos/BaruOffshore_color.jpg" alt="baru off shore" className={styles.active} />
          </article>
          <article className={styles.card}>
            <img src="/logos/Bourbon_gris.jpg" alt="naviera armamex" className={styles.disable} />
            <img src="/logos/Bourbon_color.jpg" alt="baru off shore" className={styles.active} />
          </article>
          <article className={styles.card}>
            <img src="/logos/NavieraArmamex_gris.jpg" alt="naviera armamex" />
          </article>
          <article className={styles.card}>
            <img src="/logos/NavieraArmamex_gris.jpg" alt="naviera armamex" />
          </article>
          <article className={styles.card}>
            <img src="/logos/NavieraArmamex_gris.jpg" alt="naviera armamex" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
