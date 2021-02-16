import "./App.css";
import Auth from "./components/Auth";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Auth} />
      </Switch>
    </>
  );
}

export default App;
