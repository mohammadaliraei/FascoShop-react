import React from "react";
import { images } from "../../Features/images";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderProduct from "./HeaderProduct";
import HeaderNavMob from "./HeaderNavMob";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col  items-center w-full">
      <div className="flex flex-col  ">
        <div className="md:flex hidden justify-between flex-row gap-12 py-7 ">
          <div className="md:flex hidden">
            <img
              src={images.logo}
              className=" w-28"
            />
          </div>
          <div>
            <HeaderNav />
          </div>
          <div>
            <HeaderLogo />
          </div>
        </div>
        <div className="md:hidden">
          <HeaderNavMob />
        </div>
        <HeaderProduct />
      </div>
    </div>
  );
};

export default Header;
