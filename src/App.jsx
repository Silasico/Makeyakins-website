import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Home from "./pages/Home.jsx"
import "./App.css"

const theme = {
  mobile: "768px"
}

const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Home 
        isNavbarOpen = {isNavbarOpen}
        setIsNavbarOpen = {setIsNavbarOpen}
      />
    </ThemeProvider>
    </>
  )
}
export default App
