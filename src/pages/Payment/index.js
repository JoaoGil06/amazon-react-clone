import React from "react";

import {
  Container,
  PaymentSection,
  Title,
  Address,
  Items,
  PaymentDetails,
} from "./styles";

import { useStateValue } from "../../contexts/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Container>
      <h1>
        Checkout (<Link to="/checkout">{basket?.length} Items)</Link>
      </h1>
      <PaymentSection>
        <Title>
          <h3>Delivery Address</h3>
        </Title>
        <Address>
          <p>{user?.email}</p>
          <p>123 Rua de React</p>
          <p>Porto, Portugal</p>
        </Address>
      </PaymentSection>

      <PaymentSection>
        <Title>
          <h3>Review items and delivery</h3>
          <Items>
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </Items>
        </Title>
      </PaymentSection>

      <PaymentSection>
        <Title>
          <h3>Payment method</h3>
        </Title>
        <PaymentDetails></PaymentDetails>
      </PaymentSection>
    </Container>
  );
};

export default Checkout;
