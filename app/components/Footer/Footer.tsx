import Image from "next/image";
import React from "react";
import image from "../../../public/imagePhone.png";
import image2 from "../../../public/imageEmail.png";
import image3 from "../../../public/imageFb.png";
import image4 from "../../../public/imageIns.png";
import ImageFooter from "../../../public/imageFooter.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4F2F9] py-12 mt-24">
      <div className="container flex justify-around px- mx-auto">
        <div className="flex gap-3 items-center justify-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              className="object-contain"
              src={image}
              alt="phone"
              width={18}
              height={18}
            />
            <p>
              Call us: <a href="+84 908 02 02 58">+84 908 02 02 58</a>{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              className="object-contain"
              src={image2}
              alt="email"
              width={18}
              height={18}
            />
            <p>
              Email: <a href="mailto:chucinog@gmail.com">chucinog@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>Follow us </div>
          <div>
            <Image src={ImageFooter} alt="footer" />
          </div>
          <div className="flex gap-3">
            <Image
              className="object-contain"
              src={image3}
              alt="fb"
              width={18}
              height={18}
            />
            <Image
              className="object-contain"
              src={image4}
              alt="ins"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* Subtract */
