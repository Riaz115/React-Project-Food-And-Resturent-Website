import React from "react";
import Layouts from "../../Components/Layouts/Layouts";
import HomeSection1 from "./HomeSection1";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import PromotionSection from "./PromotionSection";
import ShopSection from "./ShopSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <HomeSection1 />
      <AboutSection />
      <MenuSection />
      <PromotionSection />
      <ShopSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

export default Home;
