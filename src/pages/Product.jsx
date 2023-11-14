import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { Products } from "../data"
import Text from "../components/styles/Text"
import Button from "../components/Button"

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  width: 300px;
  max-width: 300px;
  box-shadow: 0 0 5px #ccc;
  padding-bottom: 30px;
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #000;
  margin-bottom: 16px;
`

const Body = styled.div`
  padding: 10px;
`

/*
%2A for *
%0A for enter
%3A for :
*/


const submitLink = (title, description, price) => {
  return `https://wa.me/2347081529836?text=%2AHello%20Makeyakins%2A%0A%0A%2A📌%20Product%3A%2A%20${title.replaceAll(" ", "%20")}"%0A%0A%2A📌%20Description%3A%2A%20${description.replaceAll(" ", "%20")}`
}

const Product = () => {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState({})
  
  useEffect(() => {
   for(let i = 0; i < Products.length; i++) {
     if(id == Products[i].id) {
       setSelectedProduct(Products[i])
       break
     }
   }
  }, [id])
  
  return (
    <Wrapper>
      <Card>
        <img
          src = {selectedProduct.image}
          style = {{width: "100%", height: 300}}
        />
        <Head>
          <Text
            size = {"24px"}
          >{selectedProduct.title}</Text>
        </Head>
        <Body>
          <Text
            size = {"16px"}
            weight = {400}
            mb = {"30px"}
          >
            {selectedProduct.description}
          </Text>
          <Button
            onClick = {() => location.assign(submitLink(selectedProduct.title, selectedProduct.description, selectedProduct.price))}
            bg = {"#a0009c"}
            color = {"#fff"}
          >
            Proceed to order
          </Button>
        </Body>
      </Card>
    </Wrapper>
  )
}

export default Product