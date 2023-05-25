import React from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FcViewDetails } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { store } from "@/store";

const products = ({products}) => {
  const data = store.getState().product.products;

  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {products.map((item) => (
        <div key={item._id} className="border-[1px] borber-gray-200 mb-6 group">
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              className="w-full h-full object-contain scal-100 group-hover: scale-105"
              width={300}
              height={250}
              src={item.image}
              alt="itemImage"
            ></Image>
          </div>
          <div className="px-2 py-2 flex flex-col items-center justify-center">
            <div className="flex item-center gap-3 py-2">
              <button
                className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] 
              duration-300"
              >
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link href={`/product/${item._id}`}>
                <button
                  className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center 
                  hover:bg-[#004f9a] duration-300"
                >
                  <span>
                    <FcViewDetails />
                  </span>
                  Details
                </button>
              </Link>
            </div>
            <div className="flex item-center gap-3">
              <p className="font-titleFont text-lg text-green-700 font-semibold">
                Now ${item.price}
              </p>
              <p className="text-gray-500 line-through decoration-[1px]">
                ${item.oldPrice}
              </p>
            </div>
            <p className="text-lg font-semibold py-2">
              {item.title.substring(0, 25)}
            </p>
            <p className="text-base text-zinc-500">
              {item.description.substring(0, 80)}...
            </p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default products;
