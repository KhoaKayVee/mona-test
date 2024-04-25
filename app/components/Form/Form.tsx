import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { LiaCalendarAltSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Form = () => {
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

      <div className="flex gap-3 mt-2">
        <div className="border border-solid border-gray-300 w-[220px] h-[100px] rounded-xl flex flex-col justify-start text-start px-3 py-3">
          <p className="text-gray-400">FROM</p>
          <p className="text-indigo-600 font-semibold text-xl">Da Nang</p>
          <p className="font-semibold text-base">Quang Nam, VietNam</p>
        </div>
        <div className="flex items-center justify-center">
          <PiArrowsLeftRightBold size={25} />
        </div>
        <div className="border border-solid border-gray-300 w-[220px] h-[100px] rounded-xl flex flex-col justify-start text-start px-3 py-3">
          <p className="text-gray-400">TO</p>
          <p className="text-indigo-600 font-semibold text-xl">Ho Chi Minh</p>
          <p className="font-semibold text-base">VietNam</p>
        </div>
        <div className="border border-solid border-gray-300 w-[500px] h-[100px] rounded-xl flex flex-col justify-start text-start px-3 py-3">
          <div className="flex gap-5 items-center justify-between">
            <div>
              <p className="text-gray-400">DEPARTURE</p>
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
