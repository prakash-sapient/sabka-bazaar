import React from "react";
import styled from "styled-components";
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";
import colors from "app/theme/colors";
const IncrementDecrementBtn = () => {
  return (
    <IncrementDecrementBtnContainer>
      <BsFillDashCircleFill color={colors.primary} size={22} />
      <Quantity>1</Quantity>
      <BsPlusCircleFill color={colors.primary} size={22}/>
    </IncrementDecrementBtnContainer>
  );
};

export default IncrementDecrementBtn;

const IncrementDecrementBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`;

const Quantity = styled.span`
    font-weight: 600px;
`
