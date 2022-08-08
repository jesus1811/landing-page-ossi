import React from "react";
import styles from "./styles.module.css";

const Servicios = () => {
  return (
    <>
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
      <div className={styles.serviciosInformation}>
        <div className={styles.informationContent}>
          <article className={styles.informationCard}>
            <h3>MECANICA</h3>
            <li>Soporte tecnico en deteccion de fallas y reparaciones en sistemas de propulsion</li>
            <li>Sistemas convencionales</li>
            <li>Pitch control system</li>
            <li>Pocicionamiento dinamico (DP)</li>
            <li>Azimutales</li>
            <li>thrusters</li>
          </article>
          <article className={styles.informationCard}>
            <h3>SISTEMAS ELECTROHIDRUALICOS</h3>
            <li>Transmisiones</li>
            <li>Twin disc</li>
            <li>Bombas hidraulicas</li>
            <li>Turbinas contra incendio (FIFI-I,II)</li>
          </article>
          <article className={styles.informationCard}>
            <h3>ELECTROMECANICA</h3>
            <li>Servicios de mantenimiento y suministro de winches</li>
            <li>Extraccion de impelentes. Chumaceras, Poleas, etc</li>
            <li>Cambio de Turbos</li>
            <li>Alineaciones</li>
          </article>
        </div>
        <div>
            <h3>Somos Especialistra en</h3>
        </div>
      </div>
    </>
  );
};

export default Servicios;
