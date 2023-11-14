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
          Welcome to Makeyakins Multi Concept Nigeria Limited , where we cultivate excellence and harvest quality. As a premier agricultural produce exporting company, we take pride in delivering the finest fruits, vegetables, and grains from our farms to your table.
          <br />
          <br />
          At the heart of our mission is a commitment to sustainable farming practices, ensuring the well-being of both the land and the communities we serve. From the lush orchards to the verdant fields, our dedication to environmental responsibility shines through in every aspect of our operation.
          <br />
          <br />
          What sets us apart is not just the abundance of our harvest but the meticulous care we invest in each crop. Our team of skilled farmers and agronomists work in harmony with nature, employing cutting-edge techniques to produce premium, pesticide-free yields.
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
          From the moment our produce is harvested, a seamless process begins to bring it to your doorstep. Our state-of-the-art facilities prioritize freshness and quality control, guaranteeing that every shipment maintains the peak of its flavor and nutritional value.
          <br />
          <br />
          Whether you're a local market or an international distributor, we are your trusted partner in providing farm-fresh goodness. Join us on a journey where passion meets productivity, and together, we cultivate a world of nourishment and sustainability.
        </Text>
      </div>
    </Wrapper>
  )
}

export default About