import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Balance from "./components/Balance";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/balance">
            <Balance />
          </Route>
          <Route exact path="/about">
            <About />
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
