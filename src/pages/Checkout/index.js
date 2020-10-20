import React from "react";

import Subtotal from "../../components/Subtotal";
import { Container, Left, Advertisement, CheckoutTitle, Right } from "./styles";

const Checkout = () => {
  return (
    <Container>
      <Left>
        <Advertisement src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234492668_.jpg" />
        <CheckoutTitle>
          <h2>Your shopping basket</h2>
        </CheckoutTitle>
      </Left>

      <Right>
        <Subtotal />
        <h2>O Subtotal vai aqui</h2>
      </Right>
    </Container>
  );
};

export default Checkout;
