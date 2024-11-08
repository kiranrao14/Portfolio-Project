
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
  <div id="contact">
      <h1 className="text-white font-serif font-semibold mt-12 ml-24 mb-2">Let&apos; Talk</h1>
      <Image src="/image/Component 16.png"
      className="ml-16"
      height={50} width={500} alt="img" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-10 space-x-0 lg:space-x-10">
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/image/Group 93.png"
            height={600} // Adjusted height for larger image
            width={500} // Adjusted width for larger image
            alt="contact-img"
            className="mb-5 lg:mb-0"
          />
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2">
          {/* Contact Form */}
          <form className="space-y-4 max-w-sm mx-auto bg-black shadow-lg p-6 rounded-2xl">
            <input
              type="text"
              placeholder="Name"
              className="w-3/4 p-3 text-white bg-black  border-8 border-gray-600 shadow-xl shadow-gray-800 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-3/4 p-3 text-white bg-black  border-8 border-gray-600 shadow-xl shadow-gray-800 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
            />
            <textarea
              placeholder="Message"
              className="w-3/4 p-3 text-white bg-black  border-8 border-gray-600 shadow-xl shadow-gray-800 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-3/4 p-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



          
