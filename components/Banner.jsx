"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFour,
  sliderImgOne,
  sliderImgThree,
  sliderImgTwo
} from "@/public/assets/images";
import Image from "next/image";
import { BannerText } from "./BannerText";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ButtonPrimary } from "./ButtonPrimary";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      id="next"
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black 
    text-black bg-white text-xl flex items-center justify-center rounded-md
    hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      id="prev"
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black 
    text-black bg-white text-xl flex items-center justify-center rounded-md
    hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

export const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-5 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in bloom"
              description=" New trends & styles to turn heads anytime, on any budget."
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-5 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in bloom"
              description=" New trends & styles to turn heads anytime, on any budget."
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-5 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in bloom"
              description=" New trends & styles to turn heads anytime, on any budget."
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-5 left-4 flex flex-col gap-3 text-white"
              title="Spring fashion in bloom"
              description=" New trends & styles to turn heads anytime, on any budget."
              btnText="Shop Now"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash pick of the day
          </h2>
          <p className="text-base text-zinc-600 underline underline-offset-2 cursor-pointer">
            View All
          </p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="bannerImg" />
        <ButtonPrimary btnText="Options" />
        <p className="text-lg text-black font-semibold">From $199.90</p>
        <p>uhomepro TV Standard Cabinet for Living Room...</p>
      </div>
    </div>
  );
};
