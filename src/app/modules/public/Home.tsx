import { HomeCarousel } from "app/shared/molecules";
import React from "react";
import { Container } from "react-bootstrap";

const Home: React.FC<any> = (props) => {
  return (
    <Container>
      <HomeCarousel />
    </Container>
  );
};

export default Home;
