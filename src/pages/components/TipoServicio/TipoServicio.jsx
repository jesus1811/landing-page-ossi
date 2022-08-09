import React from "react";
import styles from "./styles.module.css";

export const TipoServicio1 = () => {
  return (
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
      <div className={styles.specialization}>
        <h3>Somos Especialista en</h3>
        <div>
          <li>Mecanicos</li>
          <li>Estructurales</li>
          <li>Equipo de Buceo</li>
          <li>Refaccionamiento</li>
          <li>Procura</li>
        </div>
      </div>
    </div>
  );
};
export const TipoServicio2 = () => {
  return <div>TipoServicio2</div>;
};
export const TipoServicio3 = () => {
  return <div>TipoServicio3</div>;
};
