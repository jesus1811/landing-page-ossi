import React from "react";
import styles from "./styles.module.css";

const Contacto = () => {
  return (
    <section className={`${styles.contacto} contacto`}>
      <div className={styles.content}>
        <h1>CONTACTO</h1>
        <div className={styles.contentAside}>
          <aside></aside>
          <aside>
            <form>
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
