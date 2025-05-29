import "./styles/main.css";

import Home from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import { Toaster } from "react-hot-toast";

const Projects = lazy(() => import("./pages/Projects/Projects"));
const Project = lazy(() => import("./pages/Project/Project"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const { scrollYProgress } = useScroll();
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  return (
    <div className="App">
      <motion.div
        id="scroll-indicator"
        className="bg-black dark:bg-white"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 9999,
        }}
      />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
