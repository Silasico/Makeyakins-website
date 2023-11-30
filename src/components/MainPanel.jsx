import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Container from "./styles/Container.styled"
import ScrollToTop from "./ScrollToTop"


const MainPanel = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  
  return (
    <Container>
      <ScrollToTop>
        <Header 
          isNavbarOpen = {isNavbarOpen}
          setIsNavbarOpen = {setIsNavbarOpen}
        />
        <div>
        {children}
        </div>
        <Footer />
      </ScrollToTop>
    </Container>
  )
}

export default MainPanel