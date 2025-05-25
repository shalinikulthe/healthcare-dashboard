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
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Dashboard", icon: faTachometerAlt },
  { name: "History", icon: faHistory },
  { name: "Calendar", icon: faCalendarAlt },
  { name: "Appointments", icon: faClipboardList },
  { name: "Statistics", icon: faChartBar },
  { name: "Tests", icon: faFlask },
  { name: "Chat", icon: faComments },
  { name: "Support", icon: faLifeRing },
];

const settingLink = { name: "Setting", icon: faCog };

export default function Verticalbar() {
  return (
    <div className=" h-full bg-blue-50  rounded-bl-3xl">
      <ul className="space-y-3 pl-10">
        {navLinks.map((ittm, index) => {
          return (
            <li
              key={index}
              className="flex items-center space-x-5 rounded-md p-1.5  text-gray-600"
            >
              <FontAwesomeIcon icon={ittm.icon} className="  text-gray-400  " />
              <span>{ittm.name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="mt-auto">
        <li className="mt-24 flex items-center space-x-5 rounded-md p-2">
          <FontAwesomeIcon
            icon={settingLink.icon}
            className="w-5 h-5 text-gray-400  pl-8  "
          />
          <span className=" text-gray-600">{settingLink.name}</span>
        </li>
      </ul>
    </div>
  );
}
