import {
  faBagShopping,
  faSearch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderLogo: React.FC = () => {
  return (
    <div className=" ">
      <div className="flex gap-6 ">
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            className=" w-4 h-4"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faUser}
            className=" w-4 h-4"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faStar}
            className=" w-4 h-4"
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faBagShopping}
            className=" w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderLogo;
