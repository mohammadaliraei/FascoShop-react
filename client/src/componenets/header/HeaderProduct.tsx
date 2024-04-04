import React from "react";
import { images } from "../../Features/images";
import Buttons from "../../Features/buttons";

const HeaderProduct: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-center py-5 ">
      <div className="md:flex hidden flex-1 rounded-md  justify-center items-center">
        <img
          src={images.BoyOne}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between  w-full rounded-md mx-6 items-center">
        <div className="flex rounded-md bg-gray-200 w-full">
          <img
            src={images.ImgTwo}
            className="object-top"
          />
        </div>
        <div className="flex flex-col text-center items-center justify-center  w-full">
          <h1>
            <span className="text-7xl">ULTIMATE</span>
            <br />
            <span className="text-9xl">SALE</span>
            <br />
            <span className="text-2xl">COLLECTION</span>
          </h1>
          <Buttons
            label="SHOP NOW"
            isSwitch={true}
          />
        </div>
        <div className="flex w-full">
          <img
            src={images.ImgOne}
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="md:flex hidden flex-1 rounded-md  justify-center items-center">
        <img
          src={images.BoyTwo}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default HeaderProduct;
