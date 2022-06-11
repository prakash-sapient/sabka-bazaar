import breakpoints from "app/theme/breakpoints";
import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage src={require("app/assets/images/logo.png")} />;
};

export default Logo;

const LogoImage = styled.img`
    height: 70px;
    width: auto;
    @media screen and (max-width: ${breakpoints.lg}) {
      height: 50px;
    }
`
