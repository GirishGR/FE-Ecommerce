import React from "react";
import { FaClock, FaMailBulk, FaMobile } from "react-icons/fa";
import { FaLocationCrosshairs, FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="h-20 text-center flex justify-center items-center font-semibold text-3xl bg-gray-100">
        <h2 className="">Contact Us</h2>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="md:w-1/4 border  justify-center items-center">
          <div className="">
            <FaMobile className="h-10 w-10 items-center" />
            <h2 className="text-gray-500 text-3xl">Contact Us</h2>
          </div>

          <div>
            <FaMailBulk />
            <span> example.123@email.com </span>
          </div>

        </div>

        <div className="md:w-1/4 border flex justify-center">
          <div>
            <FaLocationPin className="h-10 w-10 items-center" />
            <h2 className="text-gray-500 text-3xl">Come See Us</h2>
          </div>
        </div>

        <div className="md:w-1/4 border flex justify-center">
          <div>
            <FaClock className="h-10 w-10 items-center" />
            <h2 className="text-gray-500 text-3xl">24/7 Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
