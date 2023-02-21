import styled from "styled-components";

export const Button = styled.button`
  width: 140px;
  height: 40px;
  background-color: #ea5952;
  text-align: center;
  color: #000;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
`;
