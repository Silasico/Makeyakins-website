import styled from "styled-components"
import Text from "./styles/Text"
import { NavItems } from "../data/index"

const FooterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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
    display: block;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 5px 0;
      width: 100%;
    }
  }
`

const Footer = () => {
  return (
    <FooterCont>
      <div>
        <Text>Quick Links</Text>
        <NavLinks>
          {
            NavItems.map(item => (
              <a href = {item.link}>
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