import { images } from "../../Features/images";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-8 pt-10 mt-4 border-t-2  ">
      <div className="flex md:flex-row flex-col gap-10 w-full ">
        <div
          className="md:w-[90%] w-full flex md:justify-start justify-center md:border-none border-b-2 md:pb-0 pb-10
        "
        >
          <img
            src={images.logo}
            className="w-28"
          />
        </div>
        <div className="flex md:flex-row flex-col w-full md:justify-between  items-center gap-8 font-bold">
          <h1>Support Center</h1>
          <h1>Involcing</h1>
          <h1>Contract</h1>
          <h1>Careers</h1>
          <h1>Blog</h1>
          <h1>FAQs</h1>
        </div>
      </div>
      <div>
        <h1 className="flex flex-row items-center justify-center gap-2 text-sm">
          copyright
          <span>
            <FaRegCopyright />
          </span>
          MDRaei. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
