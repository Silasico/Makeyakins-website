import styled from "styled-components"
import farmImg from "../assets/images/farm.jpg"
import Button from "./Button"
import Text from "./styles/Text"
import { Link } from "react-router-dom"

const BannerContainer = styled.div`
  background-image: linear-gradient(to right, rgb(0,0,0,0.8), rgb(0,0,0,0.8)), url(${farmImg});
  padding: 100px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  height: 100vh;
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 100px 20px;
  }
  
  > h1, p {
    color: #fff;
    margin-bottom: 25px
  }
  > p {
    font-size: 16px;
    text-align: center;
    line-height: 1.5em;
  }
`


const Banner = () => {
  
  return (
    <BannerContainer>
      <Text
        size = {"32px"}
        align = {"center"}
      >Welcome to Makeyakins Ltd.</Text>
      <Text
        align = "center"
        weight = {500}
      >
        We are an international multi-concept company providing goods across the world
      </Text>
      <Button 
        as = {Link}
        to= "/about"
        bg = {"#a0009c"}
        color = {"#fff"}
      >
        Learn More
      </Button>
    </BannerContainer>
  )
}

export default Banner