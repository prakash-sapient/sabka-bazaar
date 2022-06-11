import { AppRoute } from "app/route/app.route";
import { Header, Sidebar } from "app/shared/molecules";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import styled from "styled-components";
import { MyCartModal } from "app/shared/organisms";
import Footer from "app/shared/molecules/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid className="p-0">
        <MainRow>
          {/* <Col xxl={2} xl={3} md={4}>
            <Sidebar />
          </Col> */}
          <Col className="pt-5 right-container">
            <AppRoute />
            {/* <MyCartModal show={true} /> */}
          </Col>
        </MainRow>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const MainRow = styled(Row)`
  align-items: stretch;
`;
