import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useStateValue } from "./contexts/StateProvider";

import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hel2hE18VZfQIN09qjDQjeeQRuBGKrKZp7PBaMERBGadtjTkN5e7JvLguiEldyEe8jxeTSdJteWtDICgkvxVrYo00nsD2RonU"
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>

      <GlobalStyles />
    </Router>
  );
}

export default App;
