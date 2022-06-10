import { AppRoute } from "app/route/app.route";
import { BrowserRouter} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
