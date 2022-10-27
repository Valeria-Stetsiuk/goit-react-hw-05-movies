import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-left: 40px;
  margin-top: 30px;
`;
export const Button = styled.button`
  color: #ff0bef;
  background-color: #fff;
  border: none;
  font-size: 16px;
  padding: 5px 15px;
  &:hover {
    color: red;
    background-color: rgb(206, 160, 160);
    box-shadow: #fff;
  }
`;

export const Input = styled.input`
  color: black;
  background-color: #fff;
  &:focus {
    outline-color: red;
  }
`;
