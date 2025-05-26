import {
  upcomingScheduleDetailsTurs,
  SaturdatAppDetails,
} from "../../data/CalenderData";
import CommonCards from "../../components/CommonCards";

const UpcomingSchedule = () => {
  return (
    <>
      <div className="h-[40%] pb-5 -mt-1">
        <h1 className="text-black text-[16px] font-bold px-11 pt-2 ">
          The Upcoming Schedule
        </h1>
        <div className="ml-4 text-gray-400 px-7 py-2 text-[14px]">On Thursday</div>
        <div className="flex gap-4 px-11 ">
          {upcomingScheduleDetailsTurs.map((ittm, idx) => (
            <CommonCards key={idx} values={ittm} />
          ))}
        </div>
        <div className="ml-4  text-gray-400 px-7 pt-4 py-2 text-[14px]">On Saturday</div>
        <div className="flex gap-4 px-11">
          {SaturdatAppDetails.map((ittm, idx) => (
            <CommonCards key={idx} values={ittm} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingSchedule;
