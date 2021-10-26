import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/balance">
            <Balance />
          </Route>
          <Route exact path="/expenses">
            <Expenses />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
