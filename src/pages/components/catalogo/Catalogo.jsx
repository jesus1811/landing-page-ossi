import React from "react";
import styles from "./styles.module.scss";

const Catalogo = () => {
  return (
    <section className={`${styles.catalogo} catalogo`}>
      <div className={styles.content}>
        <h3>CATÁLOGO</h3>
        <div className={styles.contentImages}>
          <a href="/registro.pdf" target="_blank" rel="noreferrer">
            <img src="/Icon_Constancia.png" alt="constancia ossi" />
            <p>Contancia de registro</p>
          </a>
          <a href="/DistribuidorAutorizado.pdf" target="_blank" rel="noreferrer">
            <img src="/Icon_Distribuidor.png" alt="distribuidor ossi" />
            <p>Distribuidor autorizado</p>
          </a>
        </div>
        <div>
          <video className={styles.video} autoPlay muted controls loop src="/video.mp4" />
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
