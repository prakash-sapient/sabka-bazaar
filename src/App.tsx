import { AppRoute } from "app/route/app.route";
import Header from "app/shared/molecules/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
