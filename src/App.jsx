import * as THREE from "three"
import './App.css'
import { Canvas } from "@react-three/fiber"
import { Header } from "./components/HomePage/Header"
import Craft from "./components/HomePage/Craft"
import About from "./components/HomePage/About"
import CustomizeNow from "./components/HomePage/CustomizeNow"
import { CanvasContainer } from "./components/CanvasContainer"

function App() {

 return (
   <>
      <div className="">
        <div className="h-screen w-full fixed top-0">
          <CanvasContainer />
        </div>
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
 );
};

export default App
