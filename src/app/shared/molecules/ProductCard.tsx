import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import colors from "app/theme/colors";
import breakpoints from "app/theme/breakpoints";

interface ProductCardProps {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
  onSelect: (event: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageURL,
  price,
  description,
  stock,
  onSelect,
}) => {
  return (
    <ProductCardContainer>
      <ProductTitle>{name}</ProductTitle>
      <Container fluid>
        <Row className="align-items-stretch pb-2">
          <Col xs={6} xl={12}>
            <ProductImage src={imageURL} />
          </Col>
          <Col xs={6} xl={12}>
            <ProductDescription>{description}</ProductDescription>
          </Col>
        </Row>
        <ProductButtonGroup>
          <ButtonLink className="btn btn-link">MRP Rs.{price}</ButtonLink>
          <ButtonBuy variant="secondary">Buy Now</ButtonBuy>
        </ProductButtonGroup>
      </Container>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  margin-bottom: 60px;
  padding: 10px 0px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  background: #dcdbdb;
  padding: 5px;
  height: 93px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  width: 100%;
  color: ${colors.textPrimary};
  height: 100%;
`;

const ProductButtonGroup = styled(ButtonGroup)`
  width: 100%;
`;

const ButtonBuy = styled(Button)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  font-weight: 600;
`;

const ButtonLink = styled.span`
  text-decoration: none;
  cursor: none;
  color: ${colors.textPrimary};
  font-weight: 600;
  @media screen and (max-width: ${breakpoints.xl}) {
    display: none;
  }
`;
