import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { ProductService } from "app/core/services/product.service";
import { ProductCard } from "app/shared/molecules";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
const hello: any = { title: "Kiwi" };
const Products: React.FC<any> = () => {
  const productService = new ProductService();
  const [productList, setProductList] = React.useState<ProductItem[]>([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    productService.getProducts().then((res: any) => setProductList(res));
  };
  return (
    <Container fluid>
      <Row>
        {productList.length &&
          productList.map((elem: any) => (
            <Col xxl={3} xl={4} lg={6} key={`product_item_${elem.id}`} className="align-items-stretch">
              <ProductCard {...elem} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;


