import styled from "styled-components"
import Text from "../components/styles/Text"
import { social } from "../data"

const SocialCont = styled.div`
  padding: 20px 20px 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`

const SocialLink = styled.a`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #000;
  border-radius: 10px;
  gap: 20px;
  text-decoration: none;
  box-shadow: 0 0 5px #ccc;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const Contact = () => {
  return (
    <>
      <Text
        size = {"32px"}
        align = {"center"}
        mt = {"50px"}
        mb = {"20px"}
      >Contact Us</Text>
      
      <Text
        size = {"16px"}
        align = {"center"}
        mt = {"20px"}
        mb = {"20px"}
        weight = {400}
      >You can reach us on any of our social media pages</Text>
      
      <SocialCont>
        {
          social.map(item => (
            <SocialLink
              href = {item.link}
            >
              <img
                src = {item.img}
                style = {{width: 40, height: 40}}
              />
              <Text
                weight = {400}
              >{item.label}</Text>
            </SocialLink>
          ))
        }
      </SocialCont>
      
    </>
  )
}

export default Contact