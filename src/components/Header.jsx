import styled from "styled-components"
import Text from "./styles/Text"
import { NavItems } from "../data"
import logo from "../assets/images/Logo.jpg"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  background-image: #fff;
  box-shadow: 0 0 10px #ccc;
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 20px 10px;
  }
  
  h1 {
    color: #000;
    padding: 10px 0;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  padding-top: 20px;
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    display: ${({ isNavbarOpen }) => isNavbarOpen ? "flex" : "none"}
  }
  
  
  > a {
    font-size: 14px;
    text-decoration: none;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 5px 0;
      border-bottom: 0.5px solid #000;
      width: 100%;
    }
  }
`

const NavToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  
  p {
    color: #000;
    
    @media (min-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const Toggle = styled.div`
  width: 30px;
  height: 2px;
  background-color: #000;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #000;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #000;
  }
  
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

const Header = ({ isNavbarOpen, setIsNavbarOpen }) => {
  
  return (
    <div>
      <Nav>
        <NavToggle>
          <Logo
            src = {logo}
            alt = ""
          />
          <Toggle 
            onClick = {() => setIsNavbarOpen(!isNavbarOpen)}
          />
        </NavToggle>
        <NavLinks
          isNavbarOpen = {isNavbarOpen}
        >
          {
            NavItems.map(item => (
              <NavLink 
                to = {item.path} 
                key = {item.label}
                onClick = {() => setIsNavbarOpen(false)}
              >
                <Text
                  weight = {400}
                  mb = {"10px"}
                  mt = {"10px"}
                  
                >{item.label}</Text>
              </NavLink>
            ))
          }
          
        </NavLinks>
      </Nav>
    </div>
  )
}

export default Header