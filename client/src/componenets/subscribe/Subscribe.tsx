import React from "react";
import { images } from "../../Features/images";
import Buttons from "../../Features/buttons";

const Subscribe: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <img
        src={images.manFooter}
        className="md:block hidden"
      />
      <div className="flex flex-col justify-center items-center gap-10 text-center ">
        <h1 className="text-3xl font-bold">Subscribe To Our Newsletter</h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          doloremque qui iusto odio praesentium repellendus dolores magnam
          eligendi aspernatur quidem.
        </h1>
        <input
          type="text"
          className="shadow-xl w-full px-4 py-2 border-[1px] border-gray-50 rounded-md"
          placeholder="michael@gmail.com"
        />
        <Buttons
          isSwitch={true}
          label="Subscribe Now"
        />
      </div>
      <img
        src={images.womanFooter}
        className="md:block hidden"
      />
    </div>
  );
};

export default Subscribe;
