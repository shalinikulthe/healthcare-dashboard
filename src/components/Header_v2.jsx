import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faPlus } from "@fortawesome/free-solid-svg-icons";

const Header_v2 = () => {
  return (
    <div className="flex justify-between h-full items-center w-full rounded-t-3xl ">
      <div className=" w-[20%] flex justify-center items-center h-full py-6 bg-blue-50 rounded-tl-3xl">
        <h2 className="text-[20px] text-cyan-500 font-semibold ">Health<span className="text-blue-800">care</span></h2>
      </div>
      <div className="w-[40%] bg-white">
        <div className="mx-10 flex items-center border-2 rounded-md relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 text-[14px] text-gray-400"
          />
          <span className="text-[14px] p-1 pl-10 text-gray-400">Search</span>
          <FontAwesomeIcon
            icon={faBell}
            className="absolute right-3 text-blue-900"
          />
        </div>
      </div>
      <div className="w-[40%] flex justify-end pr-14 rounded-tr-3xl bg-blue-50 py-[23px]">
        <div className="flex gap-x-2 items-center">
          <img
            src="male-face-avatar.avif"
            alt="Male Avatar"
            className="rounded-md w-[32px] h-[32px] "
          />
          <button className="bg-blue-800 rounded-lg w-[28px] h-[30px] ">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header_v2;
