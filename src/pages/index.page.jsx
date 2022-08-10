import React from "react";
import { Container, Header } from "../components";
import { Catalogo, Clientes, Contacto, Hero, Nosotros, Servicios } from "./components";

const Home = () => {
  return (
    <Container title="Ossi" description="Empresa del rubro de metalmecanica">
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Catalogo />
      <Clientes />
      <Contacto />
    </Container>
  );
};

export default Home;
