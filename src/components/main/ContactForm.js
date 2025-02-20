import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail, IoMdPerson, IoPerson } from 'react-icons/io';
import contactUsImg from '/public/assets/images/main/formGirl.png';

function ContactForm() {
  return (
    <section className="bg-white" aria-label="Contact Form">
      <div
        className="grid-cols-2 bg-white bg-no-repeat md:grid"
        style={{
          backgroundImage: `url(/assets/images/main/formBg.png)`,
        }}
      >
        <div className="justify-center hidden bg-center bg-cover first-letter:w-full md:flex">
          <Image
            src={contactUsImg}
            className="w-[80%] mx-auto"
            alt="Contact us illustration"
          />
        </div>
        <div className="flex items-center w-full pr-20">
          <form
            className="w-full space-y-4"
            aria-label="Newsletter subscription form"
          >
            <h2 className="mb-1 text-5xl font-bold text-gray-800" tabIndex="0">
              Let&apos;s connect!
            </h2>
            <p className="text-sm font-normal text-gray-600" tabIndex="0">
              Learn the best travel secrets from our newsletter.
            </p>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <IoMdPerson
                className="text-black md:text-gray-500"
                size="25"
                aria-hidden="true"
              />
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                className="w-full pl-2 bg-transparent border-none outline-none focus:ring-2 focus:ring-primary"
                type="text"
                name="name"
                placeholder="Name"
                required
                aria-required="true"
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <IoIosMail
                className="text-black md:text-gray-500"
                size="25"
                aria-hidden="true"
              />
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                className="w-full pl-2 bg-transparent border-none outline-none focus:ring-2 focus:ring-primary"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                aria-required="true"
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-md">
              <FaPhoneAlt
                className="text-black md:text-gray-500"
                size="20"
                aria-hidden="true"
              />
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                className="w-full pl-2 bg-transparent border-none outline-none focus:ring-2 focus:ring-primary"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                aria-required="true"
                pattern="[0-9]{10}"
              />
            </div>

            <button
              type="submit"
              className="bg-black btnBlack focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="Subscribe to newsletter"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
