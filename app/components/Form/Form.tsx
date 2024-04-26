"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { LiaCalendarAltSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

const Form = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  const [content1, setContent1] = useState("DANANG");
  const [content2, setContent2] = useState("HCM");

  const [content3, setContent3] = useState("Quang Nam, Viet Nam");
  const [content4, setContent4] = useState("VietNam");

  const swapContents = () => {
    const tempContent = content1;
    const tempContent1 = content3;
    setContent1(content2);
    setContent2(tempContent);
    setContent3(content4);
    setContent4(tempContent1);
  };

  // const swapContents2 = () => {
  //   const tempContent1 = content3;
  //   setContent3(content4);
  //   setContent4(tempContent1);
  // };

  const [departureDate, setDepartureDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs());

  const handlePrev = () => {
    setDepartureDate((prevDepartureDate) =>
      prevDepartureDate.subtract(1, "day")
    );
    setReturnDate((prevReturnDate) => prevReturnDate.subtract(1, "day"));
  };

  const handleNext = () => {
    setDepartureDate((prevDepartureDate) => prevDepartureDate.add(1, "day"));
    setReturnDate((prevReturnDate) => prevReturnDate.add(1, "day"));
  };

  return (
    <div className="bg-white w-[1050px] shadow-xl h[224px] rounded-md px-6 py-4 flex flex-col justify-between gap-5 absolute -bottom-20 right-32">
      <div className="flex gap-2 text-sm font-semibold">
        <div className="flex gap-2 items-center justify-center text-center">
          <input
            className="border-8 border-indigo-600"
            type="radio"
            id="radioButton"
            name="radioButton"
          />
          <div>One way / Round-trip</div>
        </div>
        <div className="flex gap-2 items-center justify-center text-center">
          <input type="radio" />
          <div>Multi-city</div>
        </div>
        <div className="flex gap-1 items-center justify-center text-center">
          <div className="flex gap-1">
            <p className="text-indigo-600">02</p>
            <p>Adult,</p>
          </div>
          <div className="flex gap-1">
            <p className="text-indigo-600">01</p>
            <p>Children</p>
          </div>
          <div>
            <IoMdArrowDropdown fill="indigo" />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center text-center">
          <div>Business Class</div>
          <div>
            <IoMdArrowDropdown fill="indigo" />
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="flex gap-3  mt-2">
        <div className="border border-solid border-gray-300 w-[220px] h-[100px] rounded-xl flex flex-col justify-between text-start px-3 py-3">
          <p className="text-gray-400">FROM</p>
          <p className="text-indigo-600 font-semibold text-xl">{content1}</p>
          <p className="font-semibold text-base">{content3}</p>
        </div>
        <div
          onClick={swapContents}
          className="flex items-center justify-center cursor-pointer"
        >
          <PiArrowsLeftRightBold size={25} />
        </div>
        <div className="border border-solid border-gray-300 w-[220px] h-[100px] rounded-xl flex flex-col justify-between text-start px-3 py-3">
          <p className="text-gray-400">TO</p>
          <p className="text-indigo-600 font-semibold text-xl">{content2}</p>
          <p className="font-semibold text-base">{content4}</p>
        </div>
        <div className="border border-solid border-gray-300 w-[500px] h-[100px] rounded-xl flex flex-col justify-start text-start px-3 py-3">
          <div className="flex gap-5 items-center justify-between">
            <div>
              <div className="text-gray-400">DEPARTURE</div>
              <p className="text-indigo-600 font-semibold text-2xl flex items-center justify-center text-center">
                Fri, 22 Mar, 2022
                <LiaCalendarAltSolid />
              </p>
              <div className="flex gap-2">
                <button className="underline mb-2 px-2 py-1 text-sm bg-transparent text-black rounded font-bold">
                  Prev
                </button>
                <button className="text-gray-400 font-semibold text-sm">
                  Next
                </button>
              </div>
            </div>
            <div>
              <p className="text-gray-400">DEPARTURE</p>
              <p className="text-indigo-600 font-semibold text-2xl flex items-center justify-center text-center">
                Fri, 22 Mar, 2022
                <LiaCalendarAltSolid />
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-2 text-sm bg-transparent text-gray-400 rounded font-semibold">
                  Prev
                </button>
                <button className="text-gray-400 font-semibold text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/flightschedule">
        <Button
          variant="contained"
          className="absolute -bottom-9 capitalize right-5 px-5 py-3 rounded-xl flex gap-10 bg-[#4D46FA] hover:bg-indigo-400 hover:duration-700 shadow-xl"
        >
          Search Flight
          <div>
            <GoArrowRight fill="white" size={20} />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default Form;
