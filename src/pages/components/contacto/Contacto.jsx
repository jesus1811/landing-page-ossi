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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.107583634512!2d-91.80196953562927!3d18.659167669791817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f1070703f232f7%3A0xd88f68c17135684d!2sPuente%20de%20la%20Unidad%2C%20Cd%20del%20Carmen%2C%20Camp.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1660074226680!5m2!1ses-419!2spe"
              loading="lazy"
            ></iframe>
            <h3>OSSI Servicios y suministro Integrados, S.A. de C.V.</h3>
            <li className={styles.list}>
              <img src="/location.svg" alt="" />
              <p>Bugambilla N°31 Fraccionamiento Puente de la unidad, C.P.24154.Cd. del carmen Campeche.</p>
            </li>
            <li className={styles.list}>
              <img src="/whatssap.svg" alt="" />
              <a>(938) 381 8594</a>
            </li>
            <div className={styles.list}>
              <img src="/linkedin.svg" alt="" />
              <img src="/message.svg" alt="" />
              <p>Términos de Privacidad</p>
            </div>
          </aside>
          <aside className={styles.card}>
            <form className={styles.form}>
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefono" />
              <input type="text" placeholder="Asunto" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
              <button>Enviar</button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
