import React, { useState } from "react";
import { TipoServicio1, TipoServicio2, TipoServicio3 } from "../TipoServicio/TipoServicio";
import styles from "./styles.module.css";

const ServicioMovil = () => {
  const [tipoServicio, setTipoServicio] = useState(0);
  return (
    <section className={`${styles.servicios} services`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Servicios</h2>
        <div className={styles.contentCard}>
          <article
            className={`${styles.card} ${styles.blue} ${tipoServicio === 1 && styles.active}`}
            onClick={() => setTipoServicio(1)}
          >
            <h3>Mantenimiento</h3>
            <p>a embarcaciones e instalaciones costa afuera</p>
            <div className={styles.contentPico}>
              <img src="/pico.svg" alt="" className={`${styles.pico} ${tipoServicio === 1 && styles.picoActive}`} />
            </div>
          </article>
          {tipoServicio === 1 && <TipoServicio1 />}
          <article
            className={`${styles.card} ${styles.brown} ${tipoServicio === 2 && styles.active}`}
            onClick={() => setTipoServicio(2)}
          >
            <h3>Servicios</h3>
            <p>a embarcaciones e instalaciones costa afuera</p>
            <div className={styles.contentPico}>
              <img src="/pico.svg" alt="" className={`${styles.pico} ${tipoServicio === 2 && styles.picoActive}`} />
            </div>
          </article>
          {tipoServicio === 2 && <TipoServicio2 />}
          <article
            className={`${styles.card} ${styles.green} ${tipoServicio === 3 && styles.active}`}
            onClick={() => setTipoServicio(3)}
          >
            <h3>Mantenimiento</h3>
            <p>a infraestructuras</p>
            <div className={styles.contentPico}>
              <img
                src="/pico.svg"
                alt=""
                className={`${styles.pico} ${styles.mantenimiento} ${tipoServicio === 3 && styles.picoActive}`}
              />
            </div>
          </article>
          {tipoServicio === 3 && <TipoServicio3 />}
        </div>
      </div>
    </section>
  );
};

export default ServicioMovil;
