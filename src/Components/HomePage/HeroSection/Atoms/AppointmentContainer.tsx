import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DatePicker, Select, Button } from "antd";
import IconComponent from "@/Components/Common/IconComponent";
import moment from "moment"; // For date formatting

const { Option } = Select;

const tamilNaduPlaces: string[] = [
  "Adyar",
  "Anna Nagar",
  "Besant Nagar",
  "Chrompet",
  "Egmore",
  "Guindy",
  "Kilpauk",
  "Kodambakkam",
  "Kolathur",
  "Mylapore",
  "Nanganallur",
  "Nungambakkam",
  "Pallavaram",
  "Pallikaranai",
  "Porur"
];

const AppointmentContainer: React.FC = () => {
  const [location, setLocation] = useState<string>(tamilNaduPlaces[0]);
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  const handleBookWash = () => {
    const formattedStartDate = startDate?.format("YYYY-MM-DD") || "";
    const formattedEndDate = endDate?.format("YYYY-MM-DD") || "";
    const message = `Location: ${location}%0AStart Date: ${formattedStartDate}%0AEnd Date: ${formattedEndDate}`;
    const whatsappURL = `https://wa.me/7010477407?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".location-container")) {
      const selectElement = document.querySelector(".location-select") as HTMLElement;
      selectElement?.click();
    }
    if (target.closest(".start-date-container")) {
      const datePickerElement = document.querySelector(".start-date-picker") as HTMLElement;
      datePickerElement?.click();
    }
    if (target.closest(".end-date-container")) {
      const datePickerElement = document.querySelector(".end-date-picker") as HTMLElement;
      datePickerElement?.click();
    }
  };

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={handleClick}
    >
      <div className="box_Shadow flex flex-col gap-1 md:gap-0 p-4 md:flex md:flex-row md:justify-evenly md:p-0 bg-white md:w-[70%] ml-auto mr-auto rounded-lg">
        <div className="flex items-center gap-3 location-container">
          <IconComponent
            icon="hugeicons:location-06"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div>
            <p className="font-semibold">Location</p>
            <Select
              className="location-select font-light text-sm text-gray-400 bg-transparent border-none outline-none w-36 p-0"
              value={location}
              onChange={(value) => setLocation(value)}
              placeholder="Search your location"
            >
              {tamilNaduPlaces.map((place) => (
                <Option key={place} value={place} className=" w-full">{place}</Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="hidden sm:block h-14 my-2 w-px bg-gray-300"></div>
        <div className="w-full border-t border-gray-300 my-2 md:hidden"></div>

        <div className="flex items-center gap-3 start-date-container">
          <IconComponent
            icon="solar:calendar-linear"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div className="relative">
            <p className="font-semibold">Start date</p>
            <DatePicker
              className="start-date-picker text-sm bg-transparent border-none cursor-pointer outline-none p-0"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select start date"
              format="YYYY-MM-DD"
            />
          </div>
        </div>

        <div className="hidden sm:block h-14 my-2 w-px bg-gray-300"></div>
        <div className="w-full border-t border-gray-300 my-2 md:hidden"></div>

        <div className="flex items-center gap-3 end-date-container">
          <IconComponent
            icon="solar:calendar-linear"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div className="relative">
            <p className="font-semibold">End date</p>
            <DatePicker
              className="end-date-picker font-light text-sm bg-transparent border-none cursor-pointer outline-none p-0"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              placeholder="Select end date"
              format="YYYY-MM-DD"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-3 md:py-0">
          <Button
            type="primary"
            className="px-6 rounded-md py-3 shadow-md"
            onClick={handleBookWash}
          >
            Book wash
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentContainer;
