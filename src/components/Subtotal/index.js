import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Container, Gift, Button } from "./styles";

import { useStateValue } from "../../contexts/StateProvider";
import { useEffect } from "react";

const Subtotal = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [{ basket }, reducer] = useStateValue();

  useEffect(() => {
    const subTotalArr = basket.map((value) => {
      return value.price;
    });

    const subTotalSum = subTotalArr.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue);
    }, 0);

    setSubTotal(subTotalSum.toFixed(2));
  }, [basket]);

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{subTotal}</strong>
            </p>
            <Gift>
              <input type="checkbox" /> This order contains a gift
            </Gift>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <Button>Proceed to Checkout</Button>
    </Container>
  );
};

export default Subtotal;
