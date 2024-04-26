"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/imageVN.png";
import image1 from "../../../public/imageUS.png";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav
      className={`flex w-full h-20 items-center justify-around px-4 py-8 absolute z-10 ${
        pathName == "/flightschedule" ? "asdf" : ""
      }`}
    >
      <div className="flex gap-3">
        <h1 className=" text-xl text-black font-extrabold">Baycungban</h1>
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

      <ul className="flex items-center gap-5 font-medium text-base relative overflow-hidden cursor-pointer">
        <li className="hover:text-indigo-500 hover:transition-all hover:duration-500">
          Promotion
        </li>
        <Link href="/flightschedule">
          <li className="hover:text-indigo-500 hover:transition-all hover:duration-500">
            Flight Schedule
          </li>
        </Link>
        <li className="hover:text-indigo-500 hover:transition-all hover:duration-500">
          About us
        </li>
        <li className="hover:text-indigo-500 hover:transition-all hover:duration-500">
          Payment Guide
        </li>
      </ul>

      <div className="flex">
        <Button
          className="shadow-xl capitalize px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-300 hover:duration-700 text-white hover:text-indigo-700"
          variant="contained"
        >
          Booking now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
