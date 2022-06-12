import { IncrementDecrementBtn } from "app/shared/atoms";
import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import "./style.scss";
import { ProductItem } from "app/core/models/interfaces/ProductItem";

const CartItem: React.FC<ProductItem> = ({
  name,
  price,
  imageURL,
  id,
  count,
}) => {
  return (
    <Card className="cart_item_card">
      <ProductImgContainer>
        <Card.Img variant="top" src={imageURL} />
      </ProductImgContainer>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Row noGutters className="">
          <Col>
            <PriceContainer>
              <IncrementDecrementBtn
                onDecrement={() => {}}
                onIncrement={() => {}}
                count={count}
              />
              <BsX size={30} />
              <UnitPrice>Rs.{price}</UnitPrice>
            </PriceContainer>
          </Col>
          <Col className="text-end">
            <UnitPrice>Rs.{count * price}</UnitPrice>
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
`;

const UnitPrice = styled.span``;
