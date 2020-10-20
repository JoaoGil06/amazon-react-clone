import React from "react";

import { Container, Info, Price, Rating, ProductImg, Button } from "./styles";
import { useStateValue } from "../../contexts/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <Container>
      <Info>
        <p>{title}</p>
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
      </Info>
      <ProductImg src={image} />

      <Button onClick={addToBasket}>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Product;
