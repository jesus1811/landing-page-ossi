import React, { useState } from "react";
import styles from "./styles.module.css";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");
  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailto = document.querySelector("#email");
    // mailto.setAttribute("href","mailto:ossi123@gmail.com")
    mailto.setAttribute(
      "href",
      `mailto:contacto@ossi.com.mx?subject=${asunto}&body=${message} Telefono:${telefono}
      Nombre:${name} Email:${email}`
    );
    mailto.click();
  };
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
              <a target="_blank" rel="noreferrer" href="https://wa.me/3818594" style={{ display: "flex", gap: "15px" }}>
                <img src="/whatssap.svg" alt="" />
                (938) 381 8594
              </a>
            </li>
            <div className={styles.list}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/ossi-servicios-y-suministros-integrados/"
              >
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </aside>
          <aside className={styles.card}>
            <form className={styles.form}>
              <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
              <input type="text" placeholder="Asunto" onChange={(e) => setAsunto(e.target.value)} />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Mensaje"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSendEmail} type="submit">
                Enviar
              </button>
            </form>
            <a href="/avisoDePrivacidad.pdf" target="_blank" rel="noreferrer">
                Términos de Privacidad
              </a>
            <a id="email" href="mailto:contacto@ossi.com.mx" style={{ opacity: "0" }}>
              email
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
