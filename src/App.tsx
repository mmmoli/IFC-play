import { Canvas } from "@react-three/fiber";
import { Dropzone } from "./components/Dropzone";
import { Box } from "./components/Box";
import { Model } from "./components/Model";
import "./styles.css";
import { useCallback, useState } from "react";
import { DropzoneOptions } from "react-dropzone";

export default function App() {
  const [ifcURL, setIfcURL] = useState<string>();

  const onDropHandler = useCallback<NonNullable<DropzoneOptions["onDrop"]>>(
    (files) => {
      const ifcURL = URL.createObjectURL(files[0]);
      console.info(ifcURL);
      // setIfcURL(ifcURL);
    },
    []
  );

  return (
    <div className="App">
      <Dropzone options={{ onDrop: onDropHandler }} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        {ifcURL && <Model ifcURL={ifcURL} />}
      </Canvas>
    </div>
  );
}
