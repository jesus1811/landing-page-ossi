import React from "react";
import styles from "./styles.module.scss";

const CardCliente = ({ src, alt }) => {
  return (
    <article className={styles.card}>
      <img src={`/logos/${src}_gris.jpg`} alt={alt} className={styles.disable} />
      <img src={`/logos/${src}_color.jpg`} alt={alt} className={styles.active} />
    </article>
  );
};

export default CardCliente;
