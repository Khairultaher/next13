import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-hoverBg pt-4 pb-6">
      <div className="max-w-contentContainer mx-auto">
        <ul className="w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200">
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            All Depertment
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Privacy & Security
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            CA Privacy Rights
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            California Supply Chain Act
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Your Privacy Choices
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Request My Personal Information
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            #IYWYK
          </li>
        </ul>
        <p className="text-sm text-zinc-300 text-center mt-4">
          © 2023 ShopIT.com All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
