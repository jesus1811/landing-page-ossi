import React from "react";
import { Container, Header } from "../components";
import { Catalogo, Clientes, Contacto, Hero, Nosotros, Servicios } from "./components";
import ServicioMovil from "./components/servicioMovil/ServicioMovil";

const Home = () => {
  return (
    <Container title="Ossi" description="Empresa del rubro de metalmecanica">
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <ServicioMovil />
      <Catalogo />
      <Clientes />
      <Contacto />
    </Container>
  );
};

export default Home;
