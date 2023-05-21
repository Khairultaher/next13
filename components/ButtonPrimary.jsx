import React from "react";

export const ButtonPrimary = ({ btnText }) => {
  return (
    <button className="w-20 h-7 mt-1 text-sm font-semibold rounded-full bg-blue text-white hover:bg-[#004f9a] duration-300">
      {btnText}
    </button>
  );
};
