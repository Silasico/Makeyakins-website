import styled from "styled-components"
import Text from "./styles/Text"
import { NavItems, social } from "../data/index"
import { Link } from "react-router-dom"

const FooterCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;;
  background-color: #fff;
  background-image: linear-gradient(to right, #a0009c, #ff82b2);
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 20px 10px;
  }
  
  h1 {
    color: #fff;
    padding: 10px 0;
  }
  > div {
  
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      padding-bottom: 20px;
    }
  }
`

const NavLinks = styled.div`
  gap: 40px;
  align-items: center;
  
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    display: "flex";
  }
  
  
  > a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    gap: 10px;
    align-items: center;
    border-bottom: 0.5px solid #fff;
    
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 5px 0;
      width: 100%;
    }
    
    > img {
      width: 20px;
      height: 20px;
      
    }
  }
`

const Footer = () => {
  return (
    <FooterCont>
      <div>
        <Text
          size = {"20px"}
        >Quick Links</Text>
        <NavLinks>
          {
            NavItems.map(item => (
              <Link to = {item.path}>
                <Text
                  weight = {400}
                >{item.label}</Text>
              </Link>
            ))
          }
          
        </NavLinks>
      </div>
      <div>
        <Text
          size = {"20px"}
        >Contact us</Text>
        <NavLinks>
          {
            social.map(item => (
              <a href = {item.link}>
                <img
                  src = {item.imgWhite}
                />
                <Text
                  weight = {400}
                >{item.label}</Text>
              </a>
            ))
          }
          
        </NavLinks>
      </div>
    
    </FooterCont>
  )
}

export default Footer