import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail, IoMdPerson, IoPerson } from 'react-icons/io';

function ContactForm() {
  return (
    <div className="bg-white">
      <div
        className="grid-cols-2 bg-white bg-no-repeat md:grid"
        style={{
          backgroundImage: `url(/assets/images/main/formBg.png)`,
        }}
      >
        <div className="justify-center hidden bg-center bg-cover first-letter:w-full md:flex ">
          <img
            src="/assets/images/main/formGirl.png"
            className="w-[80%] mx-auto"
          />
        </div>
        <div className="flex items-center w-full pr-20">
          <form className="w-full p-5 space-y-6 rounded-md ">
            <h4 className="mb-1 text-5xl font-bold text-gray-800">
              Let’s connect!
            </h4>
            <p className="text-sm font-normal text-gray-600 ">
              Learn the best travel secrets from our newsletter.
            </p>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <IoMdPerson className="text-black md:text-gray-500" size="25" />
              <input
                id="name"
                className="w-full pl-2 bg-transparent border-none outline-none "
                type="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <IoIosMail className="text-black md:text-gray-500" size="25" />
              <input
                id="email"
                className="w-full pl-2 bg-transparent border-none outline-none "
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <FaPhoneAlt className="text-black md:text-gray-500" size="20" />
              <input
                id="phone"
                className="w-full pl-2 bg-transparent border-none outline-none "
                type="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <button type="submit" className="bg-black btnBlack">
              Subscribe now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
