import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { ProductService } from "app/core/services/product.service";
import { ProductCard } from "app/shared/molecules";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


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
    <Container fluid className="p-0">
      <Row>
        {productList.length &&
          productList.map((elem: any) => (
            <Col xxl={3} xl={4} md={6} key={`product_item_${elem.id}`} className="align-items-stretch">
              <ProductCard {...elem} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;


