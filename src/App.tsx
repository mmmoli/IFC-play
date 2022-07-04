import { Canvas } from "@react-three/fiber";
import { Dropzone } from "./components/Dropzone";
import { Box } from "./components/Box";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Dropzone />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      ,
    </div>
  );
}
