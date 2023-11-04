import styled from "styled-components"
import { Products } from "../data/index"
import Text from "./styles/Text"
import Button from "./Button"
import ProductCard from "./ProductCard.jsx"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  padding: 100px 20px;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
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
    align-items: center;
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
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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
  const featuredProducts = Products.filter((product, index) => index == 1 || index == 2 || index == 3 || index == 4 )
  
  return (
    <Wrapper>
      <Text
        size = {"32px"}
      >Featured Products</Text>
      <div>
        {
          featuredProducts.map((item, index) => (
            <ProductCard
              item = {item}
            />
          ))
        }
      </div>
      <Button
        as = {Link}
        to = {"/store"}
        margin = {"20px"}
        color = {"#000"}
      >
        Visit Store
      </Button>
    </Wrapper>
  )
}

export default Featured