import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Footer from "../component/footer/Footer";
import Portfolio from "../pages/casestudy/Portfolio";
import ScrollToTop from "../component/scrolltotop/Scrolltotop";
import Navbar from "../component/navbar/Navbar";
import Contact from "../pages/contact/Contact";
import Resume from "../pages/resume/Resume";
import Website from "../pages/casestudy/Website";
import AdminPanel from "../pages/casestudy/AdminPanel";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/webste" element={<Website />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default AppRoutes;
