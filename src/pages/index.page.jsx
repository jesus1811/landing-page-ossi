import React from "react";
import { Container, Header } from "../components";
import { Clientes, Hero, Servicios } from "./components";

const Home = () => {
  return (
    <Container title="Ossi" description="Empresa del rubro de metalmecanica">
      <Header />
      <Hero />
      <Servicios />
      <Clientes />
    </Container>
  );
};

export default Home;
