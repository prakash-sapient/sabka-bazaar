import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { ProductService } from "app/core/services/product.service";
import { ProductCard } from "app/shared/molecules";
import { addItem } from "app/store/slices/my-cart.slice";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";


const Products: React.FC<any> = () => {
  const productService = new ProductService();
  const [productList, setProductList] = React.useState<ProductItem[]>([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    productService.getProducts().then((res: any) => setProductList(res));
  };

  const addItemInCart = (item: ProductItem) => dispatch(addItem(item));

  return (
    <Container fluid className="p-0">
      <Row>
        {productList.length &&
          productList.map((elem: any) => (
            <Col
              xxl={3}
              xl={4}
              md={6}
              key={`product_item_${elem.id}`}
              className="align-items-stretch"
            >
              <ProductCard {...elem} onSelect={() => addItemInCart(elem)} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
