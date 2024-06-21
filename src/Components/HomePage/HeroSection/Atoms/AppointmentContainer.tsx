import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import IconComponent from "@/Components/Common/IconComponent";

const tamilNaduPlaces: string[] = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli",
  "Tiruppur", "Vellore", "Erode", "Thoothukudi", "Dindigul", "Thanjavur",
  "Tiruvannamalai", "Puducherry", "Nagercoil", "Kanchipuram", "Karur", "Hosur"
];

interface CalendarProps {
  onSelect: (date: string) => void;
  onClose: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelect, onClose }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onSelect(selectedDate.toISOString().split('T')[0]);
    onClose();
  };

  const changeMonth = (increment: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between mb-4">
          <button onClick={() => changeMonth(-1)} className="text-2xl">&lt;</button>
          <span className="text-lg font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={() => changeMonth(1)} className="text-2xl">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-bold">{day}</div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handleDateClick(index + 1)}
              className="w-10 h-10 text-center hover:bg-blue-100 rounded-full"
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Close</button>
      </div>
    </div>
  );
};

const AppointmentContainer: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [showStartCalendar, setShowStartCalendar] = useState<boolean>(false);
  const [showEndCalendar, setShowEndCalendar] = useState<boolean>(false);

  const handleBookWash = () => {
    const message = `Location: ${location}%0AStart Date: ${startDate}%0AEnd Date: ${endDate}`;
    const whatsappURL = `https://wa.me/7010477407?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="box_Shadow flex flex-col gap-1 md:gap-0 p-4 md:flex md:flex-row md:justify-evenly md:p-0 bg-white md:w-[70%] ml-auto mr-auto rounded-lg">
        <div className="flex items-center gap-3">
          <IconComponent
            icon="hugeicons:location-06"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div>
            <p className="font-semibold">Location</p>
            <select
              className="font-light text-sm text-gray-400 bg-transparent border-none outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Search your location</option>
              {tamilNaduPlaces.map((place) => (
                <option key={place} value={place}>{place}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden sm:block h-14 my-2 w-px bg-gray-300 "></div>
        <div className="w-full border-t border-gray-300 my-2 md:hidden"></div>

        <div className="flex items-center gap-3">
          <IconComponent
            icon="solar:calendar-linear"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div className="relative">
            <p className="font-semibold">Start date</p>
            <input
              type="text"
              className="font-light text-sm bg-transparent border-none cursor-pointer outline-none"
              value={startDate}
              onClick={() => setShowStartCalendar(true)}
              readOnly
              placeholder="Select start date"
            />
            {showStartCalendar && (
              <Calendar
                onSelect={(date) => {
                  setStartDate(date);
                  setShowStartCalendar(false);
                }}
                onClose={() => setShowStartCalendar(false)}
              />
            )}
          </div>
        </div>

        <div className="hidden sm:block h-14 my-2 w-px bg-gray-300 "></div>
        <div className="w-full border-t border-gray-300 my-2 md:hidden"></div>

        <div className="flex items-center gap-3">
          <IconComponent
            icon="solar:calendar-linear"
            className="text-primary h-8 w-8 text-gray-500"
          />
          <div className="relative">
            <p className="font-semibold">End date</p>
            <input
              type="text"
              className="font-light text-sm bg-transparent border-none cursor-pointer outline-none"
              value={endDate}
              onClick={() => setShowEndCalendar(true)}
              readOnly
              placeholder="Select end date"
            />
            {showEndCalendar && (
              <Calendar
                onSelect={(date) => {
                  setEndDate(date);
                  setShowEndCalendar(false);
                }}
                onClose={() => setShowEndCalendar(false)}
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 py-3 md:py-0">
          <button 
            className="px-6 rounded-md py-3 bg-blue-500 text-white shadow-md"
            onClick={handleBookWash}
          >
            Book wash
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentContainer;