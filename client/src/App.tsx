import "./App.css";
import { Router } from "./Router";
import { Loading } from "./modules/addons/Loading";
import { Column } from "./modules/ui/Layout";

function App() {
  return (
    <Column bg="url('./assets/default-bg.png')" className="app">
      <Router />
      <Loading />
    </Column>
  );
}

export default App;
