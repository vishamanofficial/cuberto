// ✅ Room field removed, design preserved
import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const dateRef = useRef(null);

  const handleSearch = () => {
    navigate("/available-rooms", { state: { date, options } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center h-full pt-44 px-4">
        <p className="uppercase tracking-[.25em] text-sm mb-4">
          Stay with us feel like home
        </p>
        <h2 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
          Redefine your expectations.
        </h2>
        <p className="italic text-3xl md:text-4xl mt-4 font-serif">
          A hotel experience, unlike the rest
        </p>

        {/* Search Form */}
        <div className="relative w-full max-w-5xl mx-auto mt-28 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-end text-left">
          {/* Check-in & Check-out */}
          <div className="relative col-span-2" ref={dateRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white mb-2">Check-in</label>
                <div
                  className="border border-white px-4 py-2 w-full text-white bg-transparent cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {format(date[0].startDate, "dd/MM/yyyy")}
                </div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">Check-out</label>
                <div
                  className="border border-white px-4 py-2 w-full text-white bg-transparent cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {format(date[0].endDate, "dd/MM/yyyy")}
                </div>
              </div>
            </div>

            {openDate && (
              <div className="absolute bottom-full left-0 mb-2 z-30">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          {/* Adults */}
          <div className="w-full">
            <label className="block text-sm text-white mb-2">Adults</label>
            <div className="border border-white px-2 py-2">
              <select
                className="bg-transparent text-white w-full outline-none"
                value={options.adult}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, adult: +e.target.value }))
                }
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1} className="text-black">
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Children */}
          <div className="w-full">
            <label className="block text-sm text-white mb-2">Children</label>
            <div className="border border-white px-2 py-2">
              <select
                className="bg-transparent text-white w-full outline-none"
                value={options.children}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, children: +e.target.value }))
                }
              >
                {[...Array(6).keys()].map((num) => (
                  <option key={num} value={num} className="text-black">
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto self-end">
            <button
              className="w-full bg-white text-black font-semibold px-6 py-2 shadow hover:bg-gray-200 transition whitespace-nowrap"
              onClick={handleSearch}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Video */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://cuberto.com/assets/showreel/short.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default LandingPage;
