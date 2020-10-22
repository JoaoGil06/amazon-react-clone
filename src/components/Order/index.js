import React from "react";

import { Container, OrderID, OrderTotal } from "./styles";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from "../CheckoutProduct";

const Order = ({ order }) => {
  return (
    <Container>
      <h1>Order</h1>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <OrderID>
        <small>{order.id}</small>
      </OrderID>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <OrderTotal>Total: {value}</OrderTotal>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
    </Container>
  );
};

export default Order;
