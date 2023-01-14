import "./App.css";
import { Router } from "./Router";
import { Column } from "./modules/ui/Layout";

function App() {
  return (
    <Column bg="url('./assets/default-bg.png')" className="app">
      <Router />
    </Column>
  );
}

export default App;
