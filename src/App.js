import React from "react";

// this is import from react router dom to use
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

// this is for all pages link in home section
import Home from "./Pages/Home/Home";

// this is the link for the header section
import Header from "./Components/Layouts/Header";

// this is the link for the about section
import AboutSection from "./Pages/Home/AboutSection";

// this is the link for the home section
import MenuSection from "./Pages/Home/MenuSection";

// this is the link for the shop section
import ShopSection from "./Pages/Home/ShopSection";

// this is the link for the blog section
import BlogSection from "./Pages/Home/BlogSection";

// this is the link for the contact section
import ContactSection from "./Pages/Home/ContactSection";

// this is the link for the footer section
import Footer from "./Components/Layouts/Footer";
function App() {
  return (
    <Router>
      {/* this is for the heander it will common for all pages */}
      <Header />

      {/* this is for  the home jis main all pages hain yeah start hoty hi show ho jayien gy */}
      <Routes>{<Route path="/" element={<Home />} />}</Routes>

      {/* this is for the about setion */}
      <Routes>{<Route path="/about" element={<AboutSection />} />}</Routes>

      {/* this is for the home setion */}
      <Routes>{<Route path="/home" element={<Home />} />}</Routes>

      {/* this is for the menu setion */}
      <Routes>{<Route path="/menu" element={<MenuSection />} />}</Routes>

      {/* this is for the shop setion */}
      <Routes>{<Route path="/shop" element={<ShopSection />} />}</Routes>

      {/* this is for the blog setion */}
      <Routes>{<Route path="/blog" element={<BlogSection />} />}</Routes>

      {/* this is for the contact setion */}
      <Routes>{<Route path="/contact" element={<ContactSection />} />}</Routes>

      {/* this is for the footer it will common for all pages */}
      <Footer />
    </Router>
  );
}

export default App;
