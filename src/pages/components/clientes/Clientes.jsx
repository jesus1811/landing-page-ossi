import React from "react";
import CardCliente from "../cardCliente/CardCliente";
import styles from "./styles.module.scss";

const Clientes = () => {
  return (
    <section className={`${styles.clientes} clientes`}>
      <div className={styles.content}>
        <h3>CLIENTES</h3>
        <div className={styles.contentCard}>
          <CardCliente src="NavieraArmamex" alt="naviera armamex" />
          <CardCliente src="BaruOffshore" alt="naviera armamex" />
          <CardCliente src="Bourbon" alt="naviera armamex" />
          <CardCliente src="GulfMarine" alt="naviera armamex" />
          <CardCliente src="Enermar" alt="naviera armamex" />
          <CardCliente src="HamptonInn" alt="naviera armamex" />
          <CardCliente src="HarrenPartner" alt="naviera armamex" />
          <CardCliente src="NRC" alt="naviera armamex" />
          <CardCliente src="OOSEnergy" alt="naviera armamex" />
          <CardCliente src="GrupoDiavaz" alt="naviera armamex" />
          <CardCliente src="SaamSmit" alt="naviera armamex" />
          <CardCliente src="DuradcoOper" alt="naviera armamex" />
          <CardCliente src="NavieraBourbon" alt="naviera armamex" />
          <CardCliente src="GrupoBaerum" alt="naviera armamex" />
          <CardCliente src="HarveyGulf" alt="naviera armamex" />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
