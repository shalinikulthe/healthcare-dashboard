import { calendarData, appointmentDetails } from "../../data/CalenderData";
import CommonCards from "../../components/CommonCards";

const Calendar = () => {
  return (
    <div className="px-8 h-[60%] mt-[-30px] bg-blue-50">
      <div className="flex items-center justify-between ">
        <h2 className="text-[16px] font-semibold text-gray-800 px-4 py-4">
          October 2021
        </h2>
        <div className="space-x-2 text-indigo-600 text-[14px] pr-6">
          <span className="cursor-pointer ">&larr;</span>
          <span className="cursor-pointer">&rarr;</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarData.map(({ day }, index) => (
          <div key={index} className="text-xs text-gray-500 font-semibold">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mt-1 font-medium text-gray-700">
        {calendarData.map(({ date, day }, index) => (
          <div
            key={index}
            className={`text-xs py-1 rounded-lg ${
              day === "Tues" ? "bg-indigo-100 text-indigo-700" : ""
            }`}
          >
            {date}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2 text-center text-xs">
        {calendarData.map((dayItem, index) => (
          <div key={index} className="space-y-1">
            {dayItem.times.map((slot, i) => (
              <div
                key={i}
                className={`rounded-lg py-0.5 px-2 mx-auto w-fit ${slot.color}`}
              >
                {slot.time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex px-2 py-6 gap-x-4">
        {appointmentDetails.map((ittm, index) => (
          <CommonCards key={index} values={ittm} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
