import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";
import ImageBorder from "../../../public/imageBorder.png";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className="flex justify-between gap-3 bg-white px-11 py-5 ">
      <div className="flex gap-10 justify-between items-center text-center ">
        <div className="flex flex-col text-start">
          <p className="text-base text-indigo-600 font-semibold">
            Da Nang(DAD)
          </p>
          <p className="text-gray-500 text-sm">Fri,22 Mar,2022</p>
        </div>
        <div>
          <TbArrowsLeftRight />
        </div>
        <div className="flex flex-col text-start">
          <p className="text-base text-indigo-600 font-semibold">
            Ho Chi Minh(SGN)
          </p>
          <p className="text-gray-500 text-sm">Fri,22 Mar,2022</p>
        </div>
      </div>
      <div className="flex gap-2 text-center  items-center">
        <div className="font-semibold text-sm  ">Round-trip</div>
        <div>
          <Image src={ImageBorder} alt="border" height={30} width={1.5} />
        </div>
        <div className="flex text-center justify-center items-center gap-1">
          <p className="font-semibold text-indigo-600">02</p>
          <p className="font-semibold text-sm">Adult,</p>
          <p className="font-semibold text-indigo-600">01</p>
          <p className="font-semibold text-sm">children</p>
        </div>
        <div>
          <Image src={ImageBorder} alt="border" height={30} width={1.5} />
        </div>
        <div className="font-semibold text-sm">Business Class</div>
      </div>
      <div className=" flex items-center text-center justify-center">
        <Button
          className="flex justify-between bg-orange-500 rounded-xl py-3 px-5 font-normal text-sm capitalize  hover:bg-orange-200 hover:duration-700 hover:text-orange-600"
          variant="contained"
          size="small"
        >
          Change Flights
          <CiSearch fill="white" />
        </Button>
      </div>
    </div>
  );
};

export default Schedule;
