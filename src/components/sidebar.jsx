import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHistory,
  faCalendarAlt,
  faClipboardList,
  faChartBar,
  faFlask,
  faComments,
  faLifeRing,
  faCog,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";

const generalList = [
  { name: "Dashboard", icon: faTableCellsLarge },
  { name: "History", icon: faHistory },
  { name: "Calendar", icon: faCalendarAlt },
  { name: "Appointments", icon: faClipboardList },
  { name: "Statistics", icon: faChartBar },
  { name: "Tests", icon: faFlask },
];

const toolsList = [
  { name: "Chat", icon: faComments },
  { name: "Support", icon: faLifeRing },
];


export default function Verticalbar() {
  return (
    <div className="h-full relative text-[14px] bg-blue-50  rounded-bl-3xl">
      <div className=" mx-4 pb-4 flex flex-col gap-1">
        <span className="pl-8 text-gray-400 text-[11px]">General</span>
        <ul className="space-y-2 pl-6 text-[12px]">
          {generalList.map((ittm, index) => {
            return (
              <li
                key={index}
                className="flex items-center rounded-md p-1  text-gray-600"
              >
                <FontAwesomeIcon
                  icon={ittm.icon}
                  className=" text-gray-400 px-2"
                />
                <span>{ittm.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" mx-4 flex flex-col gap-1 pb-6">
        <span className="pl-8 text-gray-400 text-[11px]">Tools</span>
        <ul className="space-y-2 pl-6 text-[12px]">
          {toolsList.map((ittm, index) => {
            return (
              <li
                key={index}
                className="flex items-center rounded-md p-1  text-gray-600"
              >
                <FontAwesomeIcon
                  icon={ittm.icon}
                  className=" text-gray-400 px-2"
                />
                <span>{ittm.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-4 absolute bottom-4 text-[12px]">
        <FontAwesomeIcon
          icon={faCog}
          className=" text-gray-400  pl-8  "
        />
        <span className="text-gray-600 pl-2">Setting</span>
      </div>
    </div>
  );
}
