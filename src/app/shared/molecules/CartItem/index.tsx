import { IncrementDecrementBtn } from "app/shared/atoms";
import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import "./style.scss";

const CartItem = () => {
  return (
    <Card className="cart_item_card">
      <ProductImgContainer>
        <Card.Img
          variant="top"
          src="/static/images/products/fruit-n-veg/apple.jpg"
        />
      </ProductImgContainer>
      <Card.Body>
        <Card.Title>Apple - Washington, Regular, 4 pcs</Card.Title>
        <Row noGutters className="">
          <Col>
            <PriceContainer>
              <IncrementDecrementBtn />
              <BsX size={30} />
              <UnitPrice>Rs.187</UnitPrice>
            </PriceContainer>
          </Col>
          <Col className="text-end">
            <UnitPrice>Rs.187</UnitPrice>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;

const ProductImgContainer = styled.div`
  max-width: 11%;
`

const UnitPrice = styled.span``;
