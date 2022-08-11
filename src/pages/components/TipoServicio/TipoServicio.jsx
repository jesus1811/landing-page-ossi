import React from "react";
import styles from "./styles.module.scss";

export const TipoServicio1 = () => {
  return (
    <div className={styles.serviciosInformation}>
      <div className={styles.informationContent}>
        <article className={styles.informationCard}>
          <h3>MECÁNICA</h3>
          <li>
            <span>&bull;</span>Soporte técnico en detección de fallas y reparaciones en sistemas de propulsión
          </li>
          <li>
            <span>&bull;</span>Sistemas convencionales
          </li>
          <li>
            <span>&bull;</span>Pitch control system
          </li>
          <li>
            <span>&bull;</span>Pocicionamiento dinámico (DP)
          </li>
          <li>
            <span>&bull;</span>Azimutales
          </li>
          <li>
            <span>&bull;</span>thrusters
          </li>
        </article>
        <article className={styles.informationCard}>
          <h3>SISTEMAS ELECTROHIDRÁLICOS</h3>
          <li>
            <span>&bull;</span>Transmisiones
          </li>
          <li>
            <span>&bull;</span>Twin disc
          </li>
          <li>
            <span>&bull;</span>Bombas hidráulicas
          </li>
          <li><span>&bull;</span>Turbinas contra incendio (FIFI-I,II)</li>
        </article>
        <article className={styles.informationCard}>
          <h3>ELECTROMECÁNICA</h3>
          <li><span>&bull;</span>Servicios de mantenimiento y suministro de winches</li>
          <li><span>&bull;</span>Extracción de impelentes. Chumaceras, Poleas, etc</li>
          <li><span>&bull;</span>Cambio de Turbos</li>
          <li><span>&bull;</span>Alineaciones</li>
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
          <li><span>&bull;</span>Evaluacion de proyectos</li>
          <li><span>&bull;</span>Ingenieria Basica y de detale</li>
          <li><span>&bull;</span>Elaboracion de bases tecnicas, simulaciones</li>
          <li><span>&bull;</span>Programacion y configuracion</li>
          <li><span>&bull;</span>Suministro, fabricacion, montaje e instalacion</li>
        </article>
        <article className={styles.informationCard}>
          <h3>MANTENIMIENTO PREVENTIVO Y CORRECTIVO</h3>
          <li><span>&bull;</span>Elaboracion de temarios y ejecucion de cursos y capacitacion</li>
          <li><span>&bull;</span>Suministro, instalacion y puesta en operacion de sistemas contra incendio</li>
          <li><span>&bull;</span>Fabricacion de estructuras</li>
          <li><span>&bull;</span>Inspeccion y pruebas no destructivas</li>
        </article>
        <article className={styles.informationCard}>
          <h3>SISTEMAS</h3>
          <li><span>&bull;</span>Detectores</li>
          <li><span>&bull;</span>Alarmas visuales y audibles</li>
          <li><span>&bull;</span>Sistemas automatizados de monitoreo y control</li>
          <li><span>&bull;</span>Sitemas de respiracion autonoma</li>
          <li><span>&bull;</span>Sitemas de respiracion en cascada</li>
        </article>
      </div>
    </div>
  );
};
export const TipoServicio3 = () => {
  return (
    <section className={styles.serviciosInformation}>
      <div className={`${styles.informationContent} ${styles.base}`}>
        <article className={styles.informationCard}>
          <h3>EQUIPOS DE LÍNEAS SUPERFICIALES DE INTERVENCIÓN DE POZOS</h3>
          <li><span>&bull;</span>Tuberías de perforación</li>
          <li><span>&bull;</span>Todo tipo de bridas</li>
          <li><span>&bull;</span>Todo tipo de válvulas</li>
          <li><span>&bull;</span>Carretes de todas las medidas</li>
        </article>
        <article className={styles.informationCard}>
          <li><span>&bull;</span>Swivel</li>
          <li><span>&bull;</span>Variedad de canastillas</li>
          <li><span>&bull;</span>Amplia variedad de Tee´s</li>
          <li><span>&bull;</span>Quemadores ecolólogicos para onshore y offshore</li>
        </article>
        <article className={styles.informationCard}>
          <li><span>&bull;</span>Cajas de recorte</li>
          <li><span>&bull;</span>Arrendamiento y suministro de herramientas especiales de perforación</li>
        </article>
      </div>
    </section>
  );
};
