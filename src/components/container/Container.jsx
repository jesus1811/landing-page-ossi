import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";

const Container = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ossi, servicios, soluciones, "/>
        <meta name="author" content="Jesudev"/>
        <link rel="icon" href="/logo_menu.ico" />
      </Head>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Container;
