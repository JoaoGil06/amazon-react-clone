import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../contexts/StateProvider";

import { Container, OrdersSection } from "./styles";

import Order from "../../components/Order";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Container>
      <OrdersSection>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </OrdersSection>
    </Container>
  );
};

export default Orders;
