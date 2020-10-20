import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const Gift = styled.small`
  display: flex;
  align-items: center;

  & > input {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  padding: 5px;
`;
