import React from "react";
import CurrencyFormat from "react-currency-format";
import { Container, Gift, Button } from "./styles";

const Subtotal = () => {
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
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
