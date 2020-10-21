import React from "react";
import CurrencyFormat from "react-currency-format";
import { Container, Gift, Button } from "./styles";

import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../contexts/reducer";

import { Link } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <Gift>
              <input type="checkbox" /> This order contains a gift
            </Gift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <Link to="/payment">
        <Button>Proceed to Checkout</Button>
      </Link>
    </Container>
  );
};

export default Subtotal;
