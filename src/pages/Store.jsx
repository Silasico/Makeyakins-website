import { useState } from "react"
import styled from "styled-components"
import Text from "../components/styles/Text"
import ProductCard from "../components/ProductCard"
import { Products } from "../data/index"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  text-align: center;
  
  > h1 {
    text-align: center;
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


const Store = () => {
  const [selected, setSelected] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <Wrapper>
      <Text
        size = {"32px"}
        align = {"center"}
      >Store</Text>
      <Text
        size = {"16px"}
        align = {"center"}
        weight = {400}
        mb = {"20px"}
      >Welcome to our store. Browse through our products to place your orders.</Text>
      <div>
        {
          Products.map((product, index) => (
            <ProductCard
              item = {product}
            />
          ))
        }
      </div>
      
    </Wrapper>
  )
}

export default Store