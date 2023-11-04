import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Container from "./styles/Container.styled"


const MainPanel = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  
  return (
    <Container>
      <Header 
        isNavbarOpen = {isNavbarOpen}
        setIsNavbarOpen = {setIsNavbarOpen}
      />
      <div>
      {children}
      </div>
      <Footer />
    </Container>
  )
}

export default MainPanel