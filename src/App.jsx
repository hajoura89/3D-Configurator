import * as THREE from "three"
import './App.css'
import { Canvas } from "@react-three/fiber"
import { Header } from "./components/HomePage/Header"
import Craft from "./components/HomePage/Craft"
import About from "./components/HomePage/About"
import CustomizeNow from "./components/HomePage/CustomizeNow"

function App() {

 return (
   <>
      <div className="">
        
        {/* Header Section */}
        <Header />
        {/* Craft  Section*/}
        <Craft />
        {/* About  Section*/}
        <About />
        {/* CustomizeNow Section */}
        <CustomizeNow />
      </div>
   </>
 )
}

export default App
