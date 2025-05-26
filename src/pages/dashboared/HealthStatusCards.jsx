import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cardList } from "../../data/CalenderData";

const HealthStatusCards = () => {
  return (
    <div className="flex gap-3 flex-col">
      {cardList.map((item, index) => (
        <div
          key={index}
          className="bg-blue-50 relative flex flex-row gap-6 pt-2 p-2 px-4 w-[160px] h-[90px]  rounded-xl "
        >
          <img
            src={item.icon}
            alt={item.label}
            className="left-4 top-2 h-8 w-8 object-cover"
          />
          <label className="text-[16px] font-semibold -ml-2 mt-2">
            {item.label}
          </label>
          <p className="text-xs absolute bottom-6 p-1 text-gray-500 ">
            {item.date}
          </p>
          <div className="w-[80%] absolute bottom-4 bg-gray-200 h-1.5 rounded-full">
            <div
              className={`${item.color} h-1.5 shadow-inner rounded-full`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}

      <p className=" absolute bottom-1 right-0 text-[16px]  text-blue-900  pr-2">
        Details
        <FontAwesomeIcon
          icon={faArrowRight}
          className=" text-blue-900 ml-2 text-[12px]"
        />
      </p>
    </div>
  );
};

export default HealthStatusCards;
