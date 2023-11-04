import Banner from "../components/Banner"
import Featured from "../components/Featured"

const Home = ({ isNavbarOpen, setIsNavbarOpen }) => {
  return (
    <>
      <Banner />
      <Featured />
    </>
  )
}

export default Home