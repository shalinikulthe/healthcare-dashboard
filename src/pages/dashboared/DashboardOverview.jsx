import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
  return (
    <>
      <div className="flex flex-row w-full relative ">
        <div className="w-[60%]">
          <AnatomySection />
        </div>
        <div className="w-[40%] pl-5">
          <HealthStatusCards />
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
