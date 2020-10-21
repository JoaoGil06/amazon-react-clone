import styled from "styled-components";

export const Container = styled.div`
  background: #fff;

  > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 500;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;

    > a {
      text-decoration: none;
    }
  }
`;

export const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.div`
  flex: 0.2;
`;

export const Address = styled.div`
  flex: 0.8;
`;

export const Items = styled.div``;

export const PaymentDetails = styled.div``;
