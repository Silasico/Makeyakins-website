import { lazy, Suspense, useState } from "react"
import { ThemeProvider } from "styled-components"
import { HashRouter, Routes, Route } from "react-router-dom"
import MainPanel from "./components/MainPanel"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Store from "./pages/Store"
import Product from "./pages/Product"
import "./App.css"

const theme = {
  mobile: "768px"
}

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme = {theme}>
        <MainPanel>
          <Routes>
            <Route path = {"/"} element = {<Home />} />
            <Route path = {"/about"} element = {<About />} />
            <Route path = {"/contact"} element = {<Contact />} />
            <Route path = {"/store"} element = {<Store />} />
            <Route path = {"/product/:id"} element = {<Product />} />
          </Routes>
        </MainPanel>
      </ThemeProvider>
    </HashRouter>
  )
}
export default App
