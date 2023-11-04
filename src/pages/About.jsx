import styled from "styled-components"
import Text from "../components/styles/Text"
import farmImg from "../assets/images/farm.jpg"

const Wrapper = styled.div`
  display: flex;
  padding: 20px 50px;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 20px;
  }
  
  > h1 {
    text-align: center;
  }
  > div {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 24px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      flex-direction: column;
    }
    
    img {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        height: 300px;
      }
    }
  }
`

const About = () => {
  return (
    <Wrapper>
      <Text
        size = {"32px"}
        align = {"center"}
        mt = {"20px"}
        mb = {"20px"}
      >About Us</Text>
      
      <div>
        <img
          src = {farmImg}
        />
        <Text
          size = {"16px"}
          weight = {400}
          lineHeight = {"2em"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.t in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </div>
      <div>
        <img
          src = {farmImg}
        />
        <Text
          size = {"16px"}
          weight = {400}
          lineHeight = {"2em"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </div>
    </Wrapper>
  )
}

export default About