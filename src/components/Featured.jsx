import styled from "styled-components"
import { FeaturedProducts } from "../data/index"
import Text from "./styles/Text"

const Wrapper = styled.div`
  display: flex;
  padding: 100px 20px;
  alignItems: center;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 20px;
  }
  > h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    alignItems: center;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      flex-direction: column;
    }
  }
`
const Card = styled.div`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #aaa;
  margin: 0 20px 20px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 10px 0;
  }
  
  > img {
    width: 100%;
    height: 200px;
  }
  > div {
    padding: 20px;
  }
`

const TopDisc = styled.div`
  display: flex;
  justify-content: space-between;
`

const Featured = () => {
  return (
    <Wrapper>
      <Text
        size = {"32px"}
      >Featured Products</Text>
      <div>
        {
          FeaturedProducts.map((item, index) => (
            <Card>
              <img src = {item.image} alt = "" />
              <div>
                <TopDisc>
                  <Text
                    size = {"20px"}
                    mb = {"10px"}
                  >{item.title}</Text>
                  <Text
                    color = {"#a0009c"}
                    size = {"16px"}
                  >
                    ${item.price}
                  </Text>
                </TopDisc>
                <Text
                  size = {"14px"}
                  weight = {400}
                >{item.description}</Text>
              </div>
            </Card>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default Featured