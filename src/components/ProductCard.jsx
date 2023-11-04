import styled from "styled-components"
import Text from "./styles/Text"
import { Link } from "react-router-dom"

const Card = styled.a`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #aaa;
  gap: 20px;
  text-decoration: none;
  
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

const ProductCard = ({ item }) => {
  return (
    <Card
      as = {Link}
      to = {`/product/${item.id}`}
    >
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
  )
}

export default ProductCard