import React from "react";
import { images } from "../../Features/images";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col   items-center w-full   ">
      <div className="flex flex-col  w-full">
        <div className="md:flex hidden w-full flex-row  py-7 ">
          <div className="md:flex hidden w-[20%] pl-6">
            <img
              src={images.logo}
              className=" w-28"
            />
          </div>
          <div className="flex justify-center w-[60%]">
            <HeaderNav />
          </div>
          <div className="flex w-[20%]">
            <HeaderLogo />
          </div>
        </div>
        {/* <div className="md:hidden">
          <HeaderNavMob />
        </div>
        <HeaderProduct /> */}
      </div>
    </div>
  );
};

export default Header;
