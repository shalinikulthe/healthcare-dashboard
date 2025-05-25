import React from "react";

const CommonCards = ({ values }) => {
  return (
    <div
      className={`${values.class} ${
        values.height ? values.height : ""
      } relative flex flex-row gap-x-6 pt-2 p-2 px-4 rounded-3xl`}
    >
      <label className="flex text-[14px] font-bold p-1">{values.label}</label>
      <p
        className={`text-xs ${
          values.height ? "absolute bottom-2.5" : "absolute bottom-8"
        }  p-1`}
      >
        {values.time}
      </p>
      {
        <p
          className={`text-xs ${values.height ? "" : "absolute bottom-4"} p-1`}
        >
          {values.Dr ? values.Dr : ""}
        </p>
      }
      <img
        src={values.icon}
        className={`${
          values.height ? "absolute right-4 top-3" : "absolute right-4 top-3"
        } h-6 w-6`}
      />
    </div>
  );
};

export default CommonCards;
