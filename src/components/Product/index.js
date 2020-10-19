import React from "react";

import { Container, Info, Price, Rating, ProductImg, Button } from "./styles";

const Product = ({ id, title, image, price, rating }) => {
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

      <Button>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Product;
