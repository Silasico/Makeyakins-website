import Container from "../components/styles/Container.styled.jsx"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Featured from "../components/Featured"

const Home = ({ isNavbarOpen, setIsNavbarOpen }) => {
  return (
    <Container>
      <Header 
        isNavbarOpen = {isNavbarOpen}
        setIsNavbarOpen = {setIsNavbarOpen}
      />
      <Banner />
      <Featured />
      <Footer />
    </Container>
  )
}

export default Home