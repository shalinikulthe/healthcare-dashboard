import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import DashboardMainContent from "../pages/dashboared/DashboardMainContent";

const Header_v2 = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-full">
      <div className=" p-4 w-[20%] bg-blue-50 rounded-tl-3xl">
        <h2 className="px-14 py-5 text-2xl   text-blue-600">Healthcare</h2>
      </div>
      <div className="w-[40%]">
        <div className="mx-10 pl-10 px-10 border-2 rounded-md py-1 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3  top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          Search
          <FontAwesomeIcon
            icon={faBell}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-900"
          />
        </div>
      </div>
      <div className="w-[40%] h-[100%] flex items-center justify-end pr-14 rounded-tr-3xl bg-blue-50">
        <div className="relative flex flex-row gap-2">
          <img
            src="male-face-avatar.avif"
            alt="Male Avatar"
            className="rounded-md w-[40px] h-[40px] "
          />
          <button className="bg-blue-800 rounded-lg w-[35px] h-[38px] ">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header_v2;
