"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiSeparator } from "react-icons/ri";
import image from "../../../public/imageBamboo.png";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdNoMeals } from "react-icons/md";
import ImageGN from "../../../public/imageGachNgang.png";
import ImageTrang from "../../../public/imageTronTrang.png";
import ImageTim from "../../../public/imageTronTim.png";
import ImageDai from "../../../public/imageKeDai.png";
import ImageThang from "../../../public/imageThang.png";
import ImageNgan from "../../../public/imageNgan.png";
import ImageSideBar from "../../../public/imageSideBar.png";
import { document } from "@/api/api";
import { request } from "graphql-request";
import { Collapse } from "antd";
import ImageThayDoi from "../../../public/imageThayDoi.png";
import moment from "moment";

const ScheduleContainer = () => {
  // handleClick
  const [isFlightDetailClicked, setIsFlightDetailClicked] = useState(false);

  const handleFlightDetailClick = () => {
    setIsFlightDetailClicked(!isFlightDetailClicked);
  };

  const flightDetailStyle = {
    color: isFlightDetailClicked ? "#6366F1" : "inherit",
    textDecoration: isFlightDetailClicked ? "underline" : "none",
    fontWeight: isFlightDetailClicked ? "600" : "normal",
    cursor: "pointer",
  };
  // handleCLick

  // handleClick
  const [isFlightDetailClicked2, setIsFlightDetailClicked2] = useState(false);

  const handleFlightDetailClick2 = () => {
    setIsFlightDetailClicked2(!isFlightDetailClicked2);
  };

  const flightDetailStyle2 = {
    color: isFlightDetailClicked ? "#6366F1" : "inherit",
    textDecoration: isFlightDetailClicked ? "underline" : "none",
    fontWeight: isFlightDetailClicked ? "600" : "normal",
    cursor: "pointer",
  };
  // handleCLick

  const [showDiv2, setShowDiv2] = useState(false);

  const handleDiv1Click = () => {
    setShowDiv2(!showDiv2);
  };

  const { Panel } = Collapse;

  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    return await request("https://api-erp.monamedia.net/graphql", document);
  };

  useEffect(() => {
    fetchData().then((res: any) => setDatas(res.Flights.items));
  }, []);
  console.log(datas);

  interface AllDetails {
    AirlineCode: string;
    Duration: number;
    FlightNumber: string;
    FeeAdult: number;
    PriceAdult: number;
    TaxAdult: number;
    Carryon: string;
    Freebag: string;
    FareClass: string;
    GroupClass: string;
    StartDate: string;
    EndDate: string;
    StartPoint: string;
    EndPoint: string;
  }

  return (
    <div className="my-3 pl-[80px] pr-32">
      <div className="flex justify-between">
        <div className="flex-grow">
          <div>
            <div className="flex w-[886px] gap-2 content-end justify-end text-center items-center mr-3">
              <div className="text-gray-500 font-semibold text-sm flex text-center justify-center items-center">
                FILTER
              </div>
              <button className="bg-white px-4 py-4 w-28 h-8 rounded-xl flex items-center text-center justify-between">
                Transit
                <MdArrowDropDown fill="blue" />
              </button>
              <button className="bg-white px-4 py-4 w-28 h-8 rounded-xl flex items-center text-center justify-between">
                Time
                <MdArrowDropDown fill="blue" />
              </button>
              <button className="bg-white px-4 py-4 w-28 h-8 rounded-xl flex items-center text-center justify-between">
                Airline
                <MdArrowDropDown fill="blue" />
              </button>
              <button className="bg-white px-4 py-4 w-28 h-8 rounded-xl flex items-center text-center justify-between">
                Low
                <MdArrowDropDown fill="blue" />
              </button>
            </div>

            {/* CONTAINER */}

            {/* thu 3 */}
            {datas.map((item: AllDetails, index) => {
              const formatStartDate = moment(item.StartDate).format("h:mm");
              const formatEndDate = moment(item.EndDate).format("h:mm");
              const formatDayMonthStartDate = moment(item.StartDate).format(
                "Do MMM"
              );

              const formatDayMonthEndDate = moment(item.EndDate).format(
                "Do MMM"
              );

              const money = item.FeeAdult + item.PriceAdult + item.TaxAdult;
              const formatMoney = money.toLocaleString();

              return (
                <div key={index}>
                  <div className="mr-2 mt-3 rounded-xl ">
                    <div className="bg-white flex w-[890px] h-fit  rounded-xl px-3 py-3 ">
                      <div className="">
                        <div className="flex gap-12">
                          <div className="flex gap-2 text-center justify-center items-center">
                            <div>
                              <Image
                                src={image}
                                alt="image"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div className="font-semibold">
                              {item.AirlineCode}
                            </div>
                          </div>
                          <div className="flex gap-3 justify-center text-center ">
                            <div className="flex flex-col gap-1 items-center justify-center text-center">
                              <div className="font-bold">{formatStartDate}</div>
                              <div className="bg-slate-400 rounded-full w-10 h-7 text-sm flex justify-center items-center text-center py-2 px-2">
                                {item.StartPoint}
                              </div>
                            </div>
                            <div className=" flex justify-center items-center text-center">
                              <div className="relative">
                                <div>
                                  <Image
                                    className="object-cover"
                                    src={ImageThayDoi}
                                    alt="thaydoi"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-[305px] "></div>
                              <div className="absolute bottom-[274px] "></div>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center text-center">
                              <div className="font-bold">{formatEndDate}</div>
                              <div className="bg-slate-400 rounded-full w-10 h-7 text-sm flex justify-center items-center text-center py-2 px-2">
                                {item.EndPoint}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-center items-center text-center gap-1">
                              <div>
                                <IoBagRemoveOutline />
                              </div>
                              <div>Baggage</div>
                              <div className="text-indigo-600 font-semibold">
                                {item.Carryon ? `${item.Carryon}` : "0kg"}
                              </div>
                            </div>
                            <div className="flex justify-center items-center gap-[2px] text-center">
                              <div>
                                <MdNoMeals />
                              </div>
                              <div>in-flight</div>
                              <div className="text-indigo-600 font-semibold">
                                Meal
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center text-center gap-1 w-[125px]">
                            <div className="text-slate-500 line-through">
                              {formatMoney} VND
                            </div>
                            <div className="text-orange-600 font-semibold ">
                              {formatMoney} VND
                            </div>
                          </div>
                          <div className="flex items-center justify-center text-center ">
                            <Button
                              onClick={handleDiv1Click}
                              className="bg-orange-100 rounded-2xl text-orange-600 font-semibold py-2 px-4 capitalize hover:bg-orange-400 hover:text-white hover:duration-700  "
                            >
                              Choose
                            </Button>
                          </div>
                        </div>

                        {/* Phan duoi container */}
                        <div className="mt-6 ">
                          <Collapse
                            className="flex bg-white border-none outline-none  "
                            accordion
                          >
                            <Panel
                              className="border-none outline-none"
                              header={
                                <div
                                  onClick={handleFlightDetailClick}
                                  style={flightDetailStyle}
                                >
                                  Flight Detail
                                </div>
                              }
                              key={1}
                              showArrow={false}
                            >
                              <div className="w-[786px]">
                                <div className="flex flex-col gap-5 mt-5">
                                  <div className="flex w-full gap-6 ">
                                    <div className="w-[45%] flex gap-8">
                                      <div className="flex flex-col gap-6 items-center justify-center text-center  ">
                                        <div>
                                          <div className="font-semibold">
                                            {formatStartDate}
                                          </div>
                                          <div>{formatDayMonthStartDate}</div>
                                        </div>
                                        <div>{item.Duration} Phút</div>
                                        <div>
                                          <div className="font-semibold">
                                            {formatEndDate}
                                          </div>
                                          <div>{formatDayMonthEndDate}</div>
                                        </div>
                                      </div>
                                      <div className="">
                                        <Image
                                          src={ImageThang}
                                          alt="hinthang"
                                          className="w-[7px] h-[165px] flex items-center justify-center text-center"
                                        />
                                      </div>
                                      <div className="flex flex-col justify-between ">
                                        <div className="">
                                          <div className="font-bold">
                                            {item.StartPoint}
                                          </div>
                                        </div>
                                        <div>
                                          <div className="font-bold">
                                            {item.EndPoint}
                                          </div>
                                          <div className="text-sm"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="w-[55%] flex flex-col gap-3">
                                      <div className="flex gap-3 items-center  text-center">
                                        <div className="">
                                          <Image
                                            src={image}
                                            alt="imagebamboo"
                                            width={30}
                                            height={30}
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <div className="font-semibold  items-center text-center justify-center">
                                            BAMBOO AIRWAYS
                                          </div>
                                          <div className="flex">
                                            <div>{item.FlightNumber}</div>
                                            <div>. {item.FareClass}</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex justify-between w-full rounded-xl bg-[#F4F2F9] px-5 py-5">
                                        <div className="flex flex-col gap-1">
                                          <div className="flex gap-1">
                                            <p>Baggage</p>
                                            <p className="text-indigo-600 font-bold">
                                              {item.Carryon
                                                ? `${item.Carryon}`
                                                : "0kg"}
                                            </p>
                                          </div>
                                          <div className="flex gap-1">
                                            <p>In-flight</p>
                                            <p className="text-indigo-600 font-bold">
                                              Meal
                                            </p>
                                          </div>
                                          <div className="flex gap-1">
                                            <p>In-flight</p>
                                            <p className="text-indigo-600 font-bold">
                                              Entertainment
                                            </p>
                                          </div>
                                        </div>

                                        <div>
                                          <div className="flex flex-col gap-1">
                                            <div className="flex gap-1">
                                              <p>Aircraft</p>
                                              <p className="text-indigo-600 font-bold">
                                                {item.FlightNumber}
                                              </p>
                                            </div>
                                            <div className="flex gap-1">
                                              <p>Seat layout</p>
                                              <p className="text-indigo-600 font-bold">
                                                3-3
                                              </p>
                                            </div>
                                            <div className="flex gap-1">
                                              <p>Seat pitch</p>
                                              <p className="text-indigo-600 font-bold">
                                                29 inches (standard)
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Panel>
                            <Panel
                              showArrow={false}
                              header={<div>Fare Info</div>}
                              key="2"
                            >
                              <div className="flex w-[740px] gap-6">
                                <div className="w-[45%] flex flex-col gap-3  pl-4">
                                  <div className="font-bold">CONDITIONS</div>
                                  <div className="flex gap-3 items-center">
                                    <div>
                                      <Image
                                        src={image}
                                        alt="bamboo"
                                        width={30}
                                        height={30}
                                      />
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="font-semibold">
                                        {item.AirlineCode}
                                      </div>
                                      <div>
                                        {item.FlightNumber} . {item.GroupClass}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="">
                                    {/* <div>
                                      <p>{item.StartPoint}</p>
                                      <p className="text-indigo-600">
                                        {item.GroupClass}
                                      </p>
                                    </div>
                                    <div>
                                      <Image
                                        src={ImageNgan}
                                        alt="ngan"
                                        width={65}
                                      />
                                    </div>
                                    <div>{item.EndPoint}</div> */}
                                    <div className="flex">
                                      <div className="flex gap-2 justify-center items-center text-center">
                                        <p>{item.StartPoint}</p>
                                        <Image
                                          className="object-contain"
                                          src={ImageNgan}
                                          alt="ngan"
                                          width={55}
                                        />
                                        <p>{item.EndPoint}</p>
                                      </div>
                                    </div>
                                    <p className="text-indigo-600">
                                      {item.GroupClass}
                                    </p>
                                  </div>
                                  <div>
                                    <div>Non - Refundable</div>
                                  </div>
                                </div>
                                <div className="w-[55%] flex flex-col gap-1">
                                  <div className="font-semibold">
                                    PRICE DETAILS
                                  </div>
                                  <div>
                                    <div className="flex gap-32 border-b border-solid border-gray-700">
                                      <div className="flex flex-col gap-1">
                                        <div>Adult Basic Fare(x1)</div>
                                        <div>Tax</div>
                                        <div>Regular Total Price</div>
                                        <div className="text-[#F06336]">
                                          Save
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1 mb-3 ">
                                        <div className="font-bold">
                                          {item.FeeAdult +
                                            item.PriceAdult +
                                            item.TaxAdult}{" "}
                                          vnd
                                        </div>
                                        <div>included</div>
                                        <div>
                                          {item.FeeAdult +
                                            item.PriceAdult +
                                            item.TaxAdult}{" "}
                                          vnd
                                        </div>
                                        <div>0 vnd</div>
                                      </div>
                                    </div>
                                    <div className="mt-2 flex items-center text-center gap-[200px] ">
                                      <div>You pay</div>
                                      <div className="text-[#F06336] font-bold">
                                        {item.FeeAdult +
                                          item.PriceAdult +
                                          item.TaxAdult}{" "}
                                        vnd
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Panel>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {showDiv2 && (
          <div className="flex-shrink">
            <div className="bg-white rounded-xl  w-[200px]">
              <div className="border-b border-solid border-gray-700 font-semibold px-3 py-2">
                YOUR FLIGHTS
              </div>
              <div className="mt-2 px-3">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#979797] w-7 h-7 rounded-full text-white flex text-center items-center justify-center">
                    01
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>Fri,11Feb,2022</p>
                    <p className="font-semibold">Da Nang - HCM</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 items-center ">
                  <div>
                    <Image src={image} alt="image" width={30} height={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">BAMBOO AIRWAYS</p>
                    <button className="text-sm text-blue-600 underline font-semibold">
                      Details
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 items-center justify-between text-center">
                  <div>
                    <div className="font-bold">21:40</div>
                    <div className="bg-slate-400 rounded-full w-10 h-7 text-sm flex justify-center items-center text-center py-2 px-2">
                      DAD
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <div className="relative flex items-center justify-center text-center  ">
                        <RiSeparator size={80} />
                      </div>
                      <div className="absolute bottom-[184px]"></div>
                      <div className="absolute top-[390px]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">23:10</div>
                    <div className="bg-slate-400 rounded-full w-10 h-7 text-sm flex justify-center items-center text-center py-2 px-2">
                      DAD
                    </div>
                  </div>
                </div>
                <div className="border-b border-solid border-gray-700">
                  <Button
                    className="my-3 bg-indigo-100 text-xs capitalize px-6 py-3 rounded-xl text-indigo-600 font-semibold hover:bg-indigo-400 hover:text-white hover:duration-700"
                    variant="contained"
                  >
                    Change Departure flight
                  </Button>
                </div>
                <div className="mt-3 border-b border-solid border-gray-400">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-indigo-600 rounded-full w-5 h-5 text-white p-3 flex items-center justify-center text-center">
                      02
                    </div>
                    <div>
                      <div>Sun,13,Feb,2022</div>
                      <div className="font-bold">HCM - Da Nang</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3  ">
                  <div>
                    <div>Subtotal</div>
                    <div className="text-orange-500 font-bold pb-3">
                      1,322,000 vnd
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleContainer;
