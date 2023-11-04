import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = styled.a`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg || "#fff"};
  border: 0.5px solid #000;
  color: ${({ color }) => color || "#ff82b2"};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  margin: ${({ margin }) => margin || 0};
`

export default Button