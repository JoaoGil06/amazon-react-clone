import React from "react";

import {
  Container,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  Rating,
  Button,
} from "./styles";
import { useStateValue } from "../../contexts/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Container>
      <ProductImage src={image} />
      <ProductInfo>
        <Title>{title}</Title>
        <Price>
          <small>€</small>
          <strong>{price}</strong>
        </Price>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span>⭐</span>
            ))}
        </Rating>
        {!hideButton && (
          <Button onClick={removeFromBasket}>Remove from basket</Button>
        )}
      </ProductInfo>
    </Container>
  );
};

export default CheckoutProduct;
