import React from "react";
import styles from "./styles.module.css";

export const TipoServicio1 = () => {
  return (
    <div className={styles.serviciosInformation}>
      <div className={styles.informationContent}>
        <article className={styles.informationCard}>
          <h3>MECÁNICA</h3>
          <li>Soporte técnico en detección de fallas y reparaciones en sistemas de propulsión</li>
          <li>Sistemas convencionales</li>
          <li>Pitch control system</li>
          <li>Pocicionamiento dinámico (DP)</li>
          <li>Azimutales</li>
          <li>thrusters</li>
        </article>
        <article className={styles.informationCard}>
          <h3>SISTEMAS ELECTROHIDRÁLICOS</h3>
          <li>Transmisiones</li>
          <li>Twin disc</li>
          <li>Bombas hidráulicas</li>
          <li>Turbinas contra incendio (FIFI-I,II)</li>
        </article>
        <article className={styles.informationCard}>
          <h3>ELECTROMECÁNICA</h3>
          <li>Servicios de mantenimiento y suministro de winches</li>
          <li>Extracción de impelentes. Chumaceras, Poleas, etc</li>
          <li>Cambio de Turbos</li>
          <li>Alineaciones</li>
        </article>
      </div>
      <div className={styles.specialization}>
        <h3>Somos Especialista en</h3>
        <div className={styles.contentSpecialization}>
          <li>Mecánicos</li>
          <li>Estructurales</li>
          <li>Electríco</li>
          <li>Equipo de Buceo</li>
          <li>Refrigeración</li>
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
    </div>
  );
};
export const TipoServicio3 = () => {
  return (
    <div className={styles.serviciosInformation}>
      <div className={`${styles.informationContent} ${styles.base}`}>
        <article className={styles.informationCard}>
          <h3>EQUIPOS DE LÍNEAS SUPERFICIALES DE INTERVENCIÓN DE POZOS</h3>
          <li>Tuberías de perforación</li>
          <li>Todo tipo de bridas</li>
          <li>Todo tipo de válvulas</li>
          <li>Carretes de todas las medidas</li>
        </article>
        <article className={styles.informationCard}>
          <li>Swivel</li>
          <li>Variedad de canastillas</li>
          <li>Amplia variedad de Tee´s</li>
          <li>Quemadores ecolólogicos para onshore y offshore</li>
        </article>
        <article className={styles.informationCard}>
          <li>Cajas de recorte</li>
          <li>Arrendamiento y suministro de herramientas especiales de perforación</li>
        </article>
      </div>
    </div>
  );
};
