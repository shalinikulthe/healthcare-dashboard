import React from "react";

const chartData = [
  { day: "Mon", bars: [45, 60, 30, 40, 20] },
  { day: "Tues", bars: [25, 50, 65, 30, 40] },
  { day: "Wed", bars: [35, 45, 20, 50] },
  { day: "Thurs", bars: [40, 60, 30, 25, 35] },
  { day: "Fri", bars: [60, 40, 45, 30] },
  { day: "Sat", bars: [50, 20, 35, 25] },
  { day: "Sun", bars: [35, 50, 45, 30] },
];

const colors = ["bg-cyan-400", "bg-gray-300", "bg-indigo-500"];

const ActivityFeed = () => {
  return (
    <div className="bg-gray-50 p-2 rounded-xl shadow w-full max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">
          3 appointment on this week
        </span>
      </div>

      <div className="flex justify-between items-end px-[5px]">
        {chartData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="flex gap-[5px] items-end mb-2">
              {item.bars.map((height, i) => (
                <div
                  key={i}
                  className={`w-[4px] rounded-full ${
                    colors[i % colors.length]
                  }`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
