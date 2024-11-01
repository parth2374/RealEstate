import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Building from "./components/Building/Building";
import Footer from './../src/components/Footer/Footer'
import Gallery from "./components/PhotoGallery/Gallery";
import Preloader from "./components/PreLoader/Preloader";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Preloader />
      <UI />
      {/* <Loader /> */}
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
      <Building />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;