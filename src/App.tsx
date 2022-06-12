import { AppRoute } from "app/route/app.route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Container fluid>
        <MainRow>
          <Sidebar />
          <Col className="pt-5 right-container">
            <AppRoute />
            <MyCartModal />
          </Col>
        </MainRow>
      </Container>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

const MainRow = styled(Row)`
  align-items: stretch;
`;
