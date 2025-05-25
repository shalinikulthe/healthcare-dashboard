import React from "react";
import DashboardOverview from "./DashboardOverview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ActivityFeed from "./ActivityFeed";
import Calendar from "./Calender";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="h-full px-10 w-[50%] flex flex-col">
        <div className="flex justify-between mb-4">
          <h1 className=" text-2xl text-blue-900 font-bold ">Dashboard</h1>
          <p className=" text-blue-900">
            this week
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-gray-600 ml-2 w-3"
            />
          </p>
        </div>
        <div className="w-full h-[75%] mb-4">
          <DashboardOverview />
        </div>
        <div className="w-full pb-4 rounded-xl">
          <ActivityFeed />
        </div>
      </div>
      <div className="w-[50%] h-full rounded-r-3xl bg-blue-50 flex flex-col">
        <Calendar />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
