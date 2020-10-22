import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../contexts/reducer";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "../../axios";

import {
  Container,
  PaymentSection,
  Title,
  Address,
  Items,
  PaymentDetails,
  PriceContainer,
} from "./styles";

import CheckoutProduct from "../../components/CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("Secret", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntend }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
        </Title>
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
      </PaymentSection>

      <PaymentSection>
        <Title>
          <h3>Payment method</h3>
        </Title>
        <PaymentDetails>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <PriceContainer>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
              />

              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </PriceContainer>

            {error & <div>{error}</div>}
          </form>
        </PaymentDetails>
      </PaymentSection>
    </Container>
  );
};

export default Checkout;
