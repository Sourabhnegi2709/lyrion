// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const Cinematography = lazy(() => import("./pages/Cinematography"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Production = lazy(() => import("./pages/Production"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Gallery = lazy(() => import("./pages/Gallery"));




import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";


const App = () => {
  
  return (
    <Router>
      <Navbar/>
      <CustomCursor />

      {/* {showLoader && <LogoLoader onComplete={() => setShowLoader(false)} />} */}

      <Suspense
        fallback={
          <div className="min-h-screen bg-black flex items-center justify-center text-white">
            Loading...
          </div>
        }
      >
        {/* <Suspense fallback={<div className="p-10 flex items-center justify-center">Loading..</div>}> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/work" element={<Work />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/production" element={<Production />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />


          {/* not found */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>

      <Footer/>
      {/* <GoToTop /> */}
    </Router>
  );
};

export default App;