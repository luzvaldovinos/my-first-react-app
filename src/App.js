import React from "react"
import About from "./Components/About"
import Info from "./Components/Info"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"
import './App.css'

function App() {
  return(
    <div className="app-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
