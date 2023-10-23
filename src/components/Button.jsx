import styled from "styled-components"

const Button = styled.a`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg || "#fff"};
  border: 0.5px solid #ff82b2;
  color: ${({ color }) => color || "#ff82b2"};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
`

export default Button