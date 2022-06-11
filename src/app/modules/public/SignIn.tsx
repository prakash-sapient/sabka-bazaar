import React from "react";
import { Container,Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <LoginTitle>Login</LoginTitle>
          <LoginTabLine>
            Get access to your Orders. Wishlist and Recommendations
          </LoginTabLine>
        </Col>
        <Col lg={5}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email address"/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <ButtonLogin variant="primary" className="btn-login">Login</ButtonLogin>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;

const LoginTitle = styled.h1`
  font-weight: bold;
`;

const LoginTabLine = styled.p``;

const ButtonLogin = styled(Button)`
  width: 100%;
  border-radius: 0px;
  padding: 10px 15px;
  font-size: 16px;
`
