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

export const Items = styled.div`
  flex: 1;
`;

export const PaymentDetails = styled.div`
  flex: 1;
`;

export const PriceContainer = styled.div`
  > h3 {
    padding-top: 10px;
  }

  > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    color: #111;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;

export const PaymentForm = styled.form`
  max-width: 400px;
`;
