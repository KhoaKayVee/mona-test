import Image from "next/image";
import React from "react";
import image from "../../../public/imageVN.png";
import image1 from "../../../public/imageUS.png";
import Button from "@mui/material/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-indigo-600 flex w-full h-20 items-center justify-around overflow-visible text-white ">
      <div className="flex justify-center items-center gap-2">
        <div className=" text-xl text-white font-extrabold">
          <Link href="/">baycungban</Link>
        </div>
        <Image
          className="object-contain cursor-pointer"
          src={image}
          alt="imageVN"
        />
        <Image
          className="object-contain cursor-pointer"
          src={image1}
          alt="imageUS"
        />
      </div>
      <ul className="flex items-center gap-5 font-normal text-base">
        <li className="hover:cursor-pointer hover:text-indigo-800 hover:duration-500">
          Promotion
        </li>
        <Link href="/flightschedule">
          <li className="hover:cursor-pointer hover:text-indigo-800 hover:duration-500 bg-indigo-500 py-2 px-4 rounded-3xl">
            Flight Schedule
          </li>
        </Link>
        <li className="hover:cursor-pointer hover:text-indigo-800 hover:duration-500">
          About us
        </li>
        <li className="hover:cursor-pointer hover:text-indigo-800 hover:duration-500">
          Payment Guide
        </li>
      </ul>
      <div>
        <Button
          className="capitalize px-3 py-2 rounded-xl bg-white text-indigo-600 font-bold hover:bg-indigo-300 hover:text-white hover:duration-500"
          size="small"
          variant="contained"
        >
          Booking now
        </Button>
      </div>
    </div>
  );
};

export default Header;
