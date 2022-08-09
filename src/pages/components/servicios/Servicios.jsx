import React, { useState } from "react";
import { TipoServicio1, TipoServicio2, TipoServicio3 } from "../TipoServicio/TipoServicio";
import styles from "./styles.module.css";

const Servicios = () => {
  const [tipoServicio, setTipoServicio] = useState(1);
  return (
    <>
      <div className={styles.servicios}>
        <div className={styles.content}>
          <h2 className={styles.title}>Servicios</h2>
          <div className={styles.contentCard}>
            <article className={`${styles.card} ${styles.blue}`} onClick={() => setTipoServicio(1)}>
              <h3>Mantenimiento</h3>
              <p>a embarcaciones e instalaciones costa afuera</p>
            </article>
            <article className={`${styles.card} ${styles.brown}`} onClick={() => setTipoServicio(2)}>
              <h3>Servicios</h3>
              <p>a embarcaciones e instalaciones costa afuera</p>
            </article>
            <article className={`${styles.card} ${styles.green}`} onClick={() => setTipoServicio(3)}>
              <h3>Mantenimiento</h3>
              <p>a infraestructuras</p>
            </article>
          </div>
        </div>
      </div>
      {tipoServicio === 1 && <TipoServicio1 />}
      {tipoServicio === 2 && <TipoServicio2 />}
      {tipoServicio === 3 && <TipoServicio3 />}
    </>
  );
};

export default Servicios;
