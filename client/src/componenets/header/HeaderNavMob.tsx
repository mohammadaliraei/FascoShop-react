import React, { useState } from "react";
import { images } from "../../Features/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faSearch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HeaderNavMob: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const handelToggle = () => {
    setIsOpen(!isOpen);
  };
  const hanadelToggleUser = () => {
    setIsOpenUser(!isOpenUser);
  };
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Products", link: "/" },
    { name: "About", link: "/" }, // Fixed typo in "About"
  ];

  return (
    <div className="flex flex-row w-full items-center justify-between px-6 ">
      <div>
        <button onClick={handelToggle}>
          <FontAwesomeIcon
            icon={faBars}
            className="w-6 h-6"
          />
          {isOpen && (
            <div className="absolute bg-white w-full h-screen px py-12 flex flex-col gap-12  items-start">
              {links.map((link, index) => (
                <button key={index}>
                  <p className="text-xl">{link.name}</p>
                </button>
              ))}
            </div>
          )}
        </button>
      </div>
      <div>
        <img
          src={images.logo}
          className="w-24"
        />
      </div>
      <div>
        <button onClick={hanadelToggleUser}>
          <FontAwesomeIcon icon={faUser} />
          {isOpenUser && (
            <div className="absolute flex flex-col items-start right-4  px-6 py-5 my-1 bg-gray-100 rounded-md">
              <button className="flex flex-row justify-center items-center gap-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className=" w-4 h-4"
                />
                <p>Search</p>
              </button>
              <button className="flex flex-row justify-center items-center gap-3">
                <FontAwesomeIcon
                  icon={faStar}
                  className=" w-4 h-4"
                />
                <p>Star of product</p>
              </button>
              <button className="flex flex-row justify-center items-center gap-3">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className=" w-4 h-4"
                />
                <p>CheckBox</p>
              </button>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default HeaderNavMob;
