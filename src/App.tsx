import { AppRoute } from "app/route/app.route";
import { Header, Sidebar } from "app/shared/molecules";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid  className="p-0">
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <AppRoute />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
