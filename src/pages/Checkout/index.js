import React from "react";

import Subtotal from "../../components/Subtotal";
import { Container, Left, Advertisement, CheckoutTitle, Right } from "./styles";
import { useStateValue } from "../../contexts/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Container>
      <Left>
        <Advertisement src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234492668_.jpg" />
        <CheckoutTitle>
          <h3>Hello, {user ? user?.email : "Guest"} </h3>
          <h2>Your shopping basket</h2>
        </CheckoutTitle>
        {basket.map((product) => (
          <CheckoutProduct
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Left>

      <Right>
        <Subtotal />
      </Right>
    </Container>
  );
};

export default Checkout;
