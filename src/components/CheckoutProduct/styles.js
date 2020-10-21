import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

export const ProductInfo = styled.div`
  padding-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

export const Price = styled.div``;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  padding: 5px;
`;
