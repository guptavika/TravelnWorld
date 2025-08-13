import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TestimonialPage from "./pages/TestimonialPage";
import Destination from "./pages/Destination";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import DomesticPackageCards from "./components/Packages/DomesticPackageCards";
import B2bLogin from "./components/B2bLogin";
import AutoScrollToTop from "./components/AutoScrollToTop";
import BlogDetail from "./components/Blogs/BlogDetail";
import PackagesPage from "./pages/PackagesPage";
import InternationalPackageCards from "./components/Packages/InternationPackageCards";
import TrendingDestinationDetail from "./pages/TrendingDestinationDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import TransportDetail from "./pages/TransportDetail";
function App() {
  return (
    <Router>
      <AutoScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/testimonials" element={<TestimonialPage/>} />
        <Route path="/packages" element={<PackagesPage/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/destination/domestic/*" element={<DomesticPackageCards />} />
        <Route path="/destination/international/*" element={<International/>} />
        <Route path="/B2bLogin" element={<B2bLogin/>} />
        <Route path="/destination/international/*" element={<InternationalPackageCards />} />
        <Route path="/:id" element={<TrendingDestinationDetail/>} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
   <Route path="/transport/:slug" element={<TransportDetail />} />
      </Routes>
    </Router>
  );
}

export default App;