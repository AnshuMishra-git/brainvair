import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Fibonacci = lazy(() => import("./component/Landing/Fibonacci"));
const Pg = lazy(() => import("./component/Landing/P&g"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Fibonacci} />
        <Route exact path="/pg" component={Pg} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
