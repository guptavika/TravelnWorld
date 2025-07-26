import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TestimonialPage from "./pages/TestimonialPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />

  <Route path="/contact" element={<Contact/>} />
  <Route path="/Blogs" element={<Blogs/>} />
 <Route path="/testimonials" element={<TestimonialPage/>} />





        
        
      </Routes>
    </Router>
  );
}

export default App;
