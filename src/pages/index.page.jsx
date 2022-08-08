import React from "react";
import { Container, Header } from "../components";
import { Hero, Servicios } from "./components";

const Home = () => {
  return (
    <Container title="Home | Ossi" description="empresa del rubro de metalmecanica">
      <Header />
      <Hero />
      <Servicios/>
    </Container>
  );
};

export default Home;
