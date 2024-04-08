import React from "react";
import Header from "../header/Header";
import HeaderNavMob from "../header/HeaderNavMob";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full ">
      <Header />
      <div className="md:hidden">
        <HeaderNavMob />
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">About Pages</h1>
      </div>
    </div>
  );
};

export default About;
