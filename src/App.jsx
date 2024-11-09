// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Experience } from "./components/Experience";
// import { UI } from "./components/UI";
// import Building from "./components/Building/Building";
// import Footer from './../src/components/Footer/Footer'
// import Gallery from "./components/PhotoGallery/Gallery";
// import Preloader from "./components/PreLoader/Preloader";
// import Cursor from "./components/Cursor/Cursor";
// import Services from "./components/Services/Services";
// import Property from "./components/SoldProperties/Property";
// import ContactLanding from "./components/ContactLanding/ContactLanding";
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//       </Router>

//       <Cursor />
//       <Preloader />
//       <UI />
//       <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
//         <group position-y={0}>
//           <Suspense fallback={null}>
//             <Experience />
//           </Suspense>
//         </group>
//       </Canvas>
//       <Services />
//       <Building />
//       <Gallery />
//       <Property />
//       <ContactLanding />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import React from 'react'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Contact from './pages/Contact'
// import About from './pages/About'

// const App = () => {
//     return (
//         <main>
//             <Router>
//                 <Routes>
//                     <Route path='/' element={<Home />} />
//                     <Route path='/about' element={<About />} />
//                     <Route path='/contact' element={<Contact />} />
//                 </Routes>
//             </Router>
//         </main>
//     )
// }

// export default App

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Building from "./components/Building/Building";
import Footer from "./../src/components/Footer/Footer";
import Gallery from "./components/PhotoGallery/Gallery";
import Preloader from "./components/PreLoader/Preloader";
import Cursor from "./components/Cursor/Cursor";
import Services from "./components/Services/Services";
import Property from "./components/SoldProperties/Property";
import ContactLanding from "./components/ContactLanding/ContactLanding";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollImage from "./components/ScrollImage/ScrollImage";
import Navbar from "./components/Navbar/Navbar";
import Listings from "./pages/Listings";

function App() {
  return (
    <>
      <Router>
        <Cursor />
        <Preloader />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UI />
                <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
                  <group position-y={0}>
                    <Suspense fallback={null}>
                      <Experience />
                    </Suspense>
                  </group>
                </Canvas>
                <Services />
                <Building />
                <Gallery />
                <Property />
                <ScrollImage />
                <ContactLanding />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
