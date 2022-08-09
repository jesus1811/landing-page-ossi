import React from "react";
import styles from "./styles.module.css";

const Contacto = () => {
  return (
    <section className={`${styles.contacto} contacto`}>
      <div className={styles.content}>
        <h3>CONTACTO</h3>
        <div className={styles.contentAside}>
          <aside className={styles.card}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3752.914391824956!2d-90.5383828856116!3d19.84357488255359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scampeche%20centro%20calle%2060!5e0!3m2!1ses-419!2spe!4v1660062974174!5m2!1ses-419!2spe"
              width="550"
              height="400"
              loading="lazy"
            ></iframe>
            <h3>OSSI Servicios y suministro Integrados, S.A. de C.V.</h3>
            <li>
              <p>Bugambilla N°31 Fraccionamiento Puente de la unidad, C.P.24154.Cd. del carmen Campeche.</p>
            </li>
            <li>
              <a>(938) 381 8594</a>
            </li>
            <div>
              <p>Términosde Privacidad</p>
            </div>
          </aside>
          <aside className={styles.card}>
            <form className={styles.form}>
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefono" />
              <input type="text" placeholder="Asunto" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
