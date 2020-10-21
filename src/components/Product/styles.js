import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  background: #fff;
  z-index: 1;

  transition: transform 450ms;

  &:hover {
    transform: scale(1.04) !important;
  }
`;

export const Info = styled.div`
  height: 200px;
  margin-bottom: 15px;
  text-align: left;
`;

export const Price = styled.p`
  margin-top: 5px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  padding: 5px;
`;
