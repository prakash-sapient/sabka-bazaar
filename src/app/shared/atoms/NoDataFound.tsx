import React from "react";
import styled from "styled-components";

const NoDataFound = () => {
  return (
    <NoDataFoundContainer>
      <Heading>No Items in your cart</Heading>
      <TabLine>Your favorite items are just a click away</TabLine>
    </NoDataFoundContainer>
  );
};

export default NoDataFound;

const NoDataFoundContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0px;
`;

const TabLine = styled.p`
  margin: 10px 0px 0px;
`;
