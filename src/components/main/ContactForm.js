import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPerson, IoPerson } from "react-icons/io";

function ContactForm() {
  return (
    <div className="bg-white">
      <div
        className="grid grid-cols-2 bg-white bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/main/formBg.png)`,
        }}
      >
        <div className="w-full bg-cover bg-center flex justify-center ">
          <img
            src="/assets/images/main/formGirl.png"
            className="w-[80%] mx-auto"
          />
        </div>
        <div className="pr-20 flex w-full items-center">
          <form className=" rounded-md p-5 w-full">
            <h1 className="text-gray-800 font-bold text-5xl mb-1">
              Get In Touch!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              Join our newsletter to receive the best travelling tips
            </p>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-md">
              <IoMdPerson className="text-gray-500" size="25" />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-md">
              <IoIosMail className="text-gray-500" size="25" />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-md">
              <FaPhoneAlt className="text-gray-500" size="20" />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>

            <button
              type="submit"
              className="btnBlack px-8 py-2 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Join Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
