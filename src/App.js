import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useStateValue } from "./contexts/StateProvider";

import { auth } from "./firebase";

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>

      <GlobalStyles />
    </Router>
  );
}

export default App;
