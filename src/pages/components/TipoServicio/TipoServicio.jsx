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
  return (
    <div className={styles.serviciosInformation}>
      <div className={styles.informationContent}>
        <article className={styles.informationCard}>
          <h3>SERVICIOS A SISTEMAS CONTRA INCENDIO</h3>
          <li>Evaluacion de proyectos</li>
          <li>Ingenieria Basica y de detale</li>
          <li>Elaboracion de bases tecnicas, simulaciones</li>
          <li>Programacion y configuracion</li>
          <li>Suministro, fabricacion, montaje e instalacion</li>
        </article>
        <article className={styles.informationCard}>
          <h3>MANTENIMIENTO PREVENTIVO Y CORRECTIVO</h3>
          <li>Elaboracion de temarios y ejecucion de cursos y capacitacion</li>
          <li>Suministro, instalacion y puesta en operacion de sistemas contra incendio</li>
          <li>Fabricacion de estructuras</li>
          <li>Inspeccion y pruebas no destructivas</li>
        </article>
        <article className={styles.informationCard}>
          <h3>SISTEMAS</h3>
          <li>Detectores</li>
          <li>Alarmas visuales y audibles</li>
          <li>Sistemas automatizados de monitoreo y control</li>
          <li>Sitemas de respiracion autonoma</li>
          <li>Sitemas de respiracion en cascada</li>
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
export const TipoServicio3 = () => {
  return <div>TipoServicio3</div>;
};
