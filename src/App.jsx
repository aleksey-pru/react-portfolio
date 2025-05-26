import "./styles/main.css";

import Home from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("./pages/Projects/Projects"));
const Project = lazy(() => import("./pages/Project/Project"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
