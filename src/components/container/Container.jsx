import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";

const Container = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Container;
