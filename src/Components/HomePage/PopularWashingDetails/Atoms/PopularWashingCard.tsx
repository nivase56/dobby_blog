import Image from "next/image";
import React from "react";
import IconComponent from "@/Components/Common/IconComponent";

const PopularWashingCard = ({ data }: any) => {
  return (
    <div className="border rounded-lg w-[90%] mr-auto ml-auto md:w-[20%] md:mx-5 md:p-3 my-8 p-5 flex flex-col items-center justify-center">
      <Image
        src={data.imgsrc}
        alt={data.name}
        width={200}
        height={200}
        className="flex items-center justify-center"
      />
      <p className="py-2 font-semibold">{data.name}</p>
      <div className="flex items-center gap-3">
        <IconComponent
          icon="noto:star"
          className="text-primary h-4 w-4 text-gray-500"
        />
        <p className="flex gap-1">{data.rating} <span className="font-semibold">({data.count} reviews)</span></p>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center justify-center py-4">
        <div className="flex items-center justify-center">
          <IconComponent
            icon="material-symbols-light:person-outline"
            className="text-primary h-6 w-6 text-gray-500"
          />
          <p className="text-xs">{data.passengers} Passengers </p>
        </div>
        <div className="flex items-center justify-center">
          <IconComponent
            icon="solar:transmission-bold-duotone"
            className="text-primary h-4 w-4 mx-1 text-gray-500"
          />
          <p className="text-xs">Auto</p>
        </div>
        <div className="flex items-center justify-center">
          <IconComponent
            icon="ion:snow-outline"
            className="text-primary h-4 w-4 mx-1 text-gray-500"
          />
          <p className="text-xs">Air Conditioning</p>
        </div>
        <div className="flex items-center justify-center">
          <IconComponent
            icon="mdi:car-door"
            className="text-primary h-4 w-4 mx-1 text-gray-500"
          />
          <p className="text-xs">{data.doors} Doors</p>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mb-5"></div>
      <div className="flex justify-between w-full">
        <p className="text-sm">Price</p>
        <p className="text-md font-semibold">${data.price}
          <span className="text-sm"> / day</span>
        </p>
      </div>
      <button className="w-full py-2 bg-blue-600 mt-4 shadow-md text-white rounded-lg flex items-center justify-center">
        Book now 
        <IconComponent
          icon="tabler:arrow-right"
          className="text-primary h-5 w-5 mt-[2px] mx-3 text-white"
        />
      </button>
    </div>
  );
};

export default PopularWashingCard;
