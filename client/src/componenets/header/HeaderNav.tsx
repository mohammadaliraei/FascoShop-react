import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { images } from "../../Features/images";

const HeaderNav: React.FC = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Products", link: "/" },
    { name: "About", link: "/" }, // Fixed typo in "About"
  ];

  return (
    <div className="flex  items-center justify-center">
      <div className="md:hidden ">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="md:hidden flex w-24">
        <img src={images.logo} />
      </div>
      <div className="md:flex hidden gap-16">
        {links.map((link, index) => (
          <button key={index}>
            <p>{link.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderNav;
