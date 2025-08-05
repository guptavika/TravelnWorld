import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TestimonialPage from "./pages/TestimonialPage";
// import Packages from "./pages/packages";
import Destination from "./pages/Destination";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import DomesticPackageCards from "./components/Packages/DomesticPackageCards";
import B2bLogin from "./components/B2bLogin"
import AutoScrollToTop from "./components/AutoScrollToTop";
import BlogDetail from "./components/Blogs/BlogDetail";
import PackagesPage from "./pages/PackagesPage";
function App() {
  return (
    <Router>
      <AutoScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />

  <Route path="/contact" element={<Contact/>} />
  <Route path="/Blogs" element={<Blogs/>} />
 <Route path="/testimonials" element={<TestimonialPage/>} />
 <Route path="/packages" element={<PackagesPage/>} />
 <Route path="/destination" element={<Destination/>} />
{/* <Route path="/destination/domestic" element={<Domestic/>} /> */}
<Route path="/destination/international/*" element={<International/>} />
<Route path="/destination/domestic/*" element={<Domestic />} />
<Route path="/B2bLogin" element={<B2bLogin/>} />
 <Route path="/blogs/:blogId" element={<BlogDetail />} />




        
        
      </Routes>
    </Router>
  );
}

export default App;
