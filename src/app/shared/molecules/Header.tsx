import React from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { Logo } from "../atoms";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { ROUTES } from "app/route/app-route-labels";
import { BsFillCartFill } from "react-icons/bs";
import breakpoints from "app/theme/breakpoints";

const Header: React.FC<any> = ({ cartCount }) => {
  return (
    <NavbarWhite bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinkContainer className="me-auto">
          <LinkContainer to={ROUTES.HOME}>
            <NavLink>Home</NavLink>
          </LinkContainer>
          <LinkContainer to={ROUTES.PRODUCTS}>
            <NavLink>Products</NavLink>
          </LinkContainer>
        </NavLinkContainer>
      </Navbar.Collapse>
      <Navbar.Offcanvas placement="end">
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <LinkContainer to={ROUTES.SIGN_IN}>
              <NavLink href="#action1">Sign In</NavLink>
            </LinkContainer>
            <LinkContainer to={ROUTES.REGISTRATION}>
              <NavLink href="#action2">Registration</NavLink>
            </LinkContainer>
          </Nav>
          <Button variant="light">
            <BsFillCartFill />
            {cartCount} Items
          </Button>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </NavbarWhite>
  );
};

export default Header;

const NavbarWhite = styled(Navbar)`
  background-color: #fff !important;
  box-shadow: 0px 3px 17px 3px rgba(0,0,0,0.05);
`;

const NavLinkContainer = styled(Nav)`
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 20px;
  }
`;

const NavLink = styled(Nav.Link)`
  font-weight: bold;
`;
