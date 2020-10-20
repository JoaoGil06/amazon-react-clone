import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { StateProvider } from "./contexts/StateProvider";
import reducer, { initialState } from "./contexts/reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>

        <GlobalStyles />
      </Router>
    </StateProvider>
  );
}

export default App;
