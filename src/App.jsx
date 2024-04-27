import * as THREE from "three"
import './App.css'
import { Canvas } from "@react-three/fiber"

function App() {

 return (
   <>
     <Canvas>
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
     </Canvas>
   </>
 )
}

export default App
