import React from "react";
import { images } from "../../Features/images";
import Buttons from "../../Features/buttons";
// import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center border-2 rounded-lg shadow-lg">
      <div>
        <img
          src={images.manSignIn}
          className="w-[400px] rounded-l-lg"
        />
      </div>
      <div className="flex flex-col gap-12 items-center py-40 px-12 w-[600px]">
        <img
          src={images.logo}
          className="w-36"
        />
        <input
          placeholder="Enter Code"
          className="w-full px-4 py-2 rounded-md border-2"
        />
        <Link to="/dashboard">
          <Buttons
            label="Sign In"
            isSwitch={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
