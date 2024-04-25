import React from "react";
import Form from "../Form/Form";
import Image from "next/image";
import Image1 from "../../../public/imageMaybay.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Image className="w-full h-full object-cover" src={Image1} alt="maybay" />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-start text-black px-[100px]">
        <h1 className=" text-7xl font-light">Hello!</h1>
        <h1 className="text-7xl font-normal">Where are</h1>
        <div className="text-7xl font-light flex gap-2 mb-3">
          you <p className="text-indigo-600 font-medium">flying</p> to ...
        </div>
      </div>
      <Form />
      {/* <div
        className=" bg-cover bg-center h-screen absolute top-0 left-0 w-full  "
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/570a/f726/c2fa278c6c35ad972b7596c7e5d4169c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCV4w4ZCMgzx4ibOEFZQTjqtcGj5i7WnlSz5Lf4Qrv48kJ739mj31ZQCiQ~sXHcRUYA5mliaGghJebffmEL00N~6TzuR9sNE8h3tXQf96lsNo7Yqzbdlo0KqlFlsuthq2QMwCPNVcV6L1EMDJylzIEniCzohF-pNrsYA4HAc-I2aQTplfJbkmfO4EBusfT007z6RNLRXqjMx5m164E8RCZZp5cfNZ6nfHLdn6rNAos9m6Id0fkRAvkjG98M2cbfmqqWMsSsB-Fp0Vbe0mPeQbW4rOytT58OmC-W9V2voL1lKnyuDHqIK-iLRVLZJlAsny-5BrUw71JUF7T1Yh9bwFw__')",
        }}
      >
        <div className=" w-full h-full flex flex-col text-center items-start justify-center px-28">
          <p className=" text-7xl font-light">Hello!</p>
          <p className="text-7xl font-normal">Where are</p>
          <div className="text-7xl font-light flex gap-2 mb-3">
            you <p className="text-blue-700 font-medium">flying</p> to ...
          </div>
          <Form />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
