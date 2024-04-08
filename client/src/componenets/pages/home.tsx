import React from "react";
import Header from "../header/Header";
import Logo from "../logos/Logo";
import DealOfTheMonth from "../dealOfTheMonth/DealOfTheMonth";
import NewArrivals from "../newArrivals/NewArrivals";
import Feature from "../features/Feature";
import Gallery from "../gallery/Gallery";
import Testimonials from "../testimonials/Testimonials";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
import HeaderNavMob from "../header/HeaderNavMob";
import HeaderProduct from "../header/HeaderProduct";
const home: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Header />
      <div className="md:hidden">
        <HeaderNavMob />
      </div>
      <HeaderProduct />
      <Logo />
      <DealOfTheMonth />
      <NewArrivals />
      <Feature />
      <Gallery />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default home;
