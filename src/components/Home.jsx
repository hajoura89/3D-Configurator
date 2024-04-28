import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Header } from "./HomePage/Header"
import Craft from "./HomePage/Craft"
import About from "./HomePage/About"
import CustomizeNow from "./HomePage/CustomizeNow"
import { CanvasContainer } from "./CanvasContainer"

function Home() {

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

export default Home
