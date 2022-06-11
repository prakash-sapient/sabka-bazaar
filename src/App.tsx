import { AppRoute } from "app/route/app.route";
import { Header, Sidebar } from "app/shared/molecules";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid  className="p-0">
        <MainRow>
          <Col xxl={2} xl={3} md={4}>
            <Sidebar />
          </Col>
          <Col xxl={10} xl={9} md={8} className="p-5">
            <AppRoute />
          </Col>
        </MainRow>
      </Container>
    </BrowserRouter>
  );
}

export default App;


const MainRow = styled(Row)`
  align-items: stretch
`
