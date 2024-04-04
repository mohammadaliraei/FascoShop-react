import React from "react";
import { images } from "../../Features/images";

const logo: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 items-center md:justify-between py-5 bg-gray-100 md:bg-white">
      <div>
        <img
          src={images.Chanel}
          className="md:w-32 w-52 "
        />
      </div>
      <div>
        <img
          src={images.Louis}
          className="md:w-32 w-52 "
        />
      </div>
      <div>
        <img
          src={images.Prada}
          className="md:w-32 w-52 "
        />
      </div>
      <div>
        <img
          src={images.CalvinKlein}
          className="md:w-32 w-52 "
        />
      </div>
      <div>
        <img
          src={images.Denim}
          className="md:w-32 w-52 "
        />
      </div>
    </div>
  );
};

export default logo;
