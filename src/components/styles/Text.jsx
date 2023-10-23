import styled from "styled-components"

const Text = styled.h1`
  font-size: ${({ size }) => size || '16px' };
  color: ${({ color }) => color || "#000" };
  font-weight:  ${({ weight }) => weight || 600 };
  line-height: ${({ lineHeight }) => lineHeight || '1.5em' };
  text-align: ${({ align }) => align || 'left'};
  margin-top: ${({ mt }) => mt || 0};
  margin-bottom: ${({ mb }) => mb || 0};
  margin-left: ${({ ml }) => ml || 0};
  margin-right: ${({ mr }) => mr || 0};
  font-family: 'Roboto', sans-serif;
`


export default Text