import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 px-4 sm:px-6 gap-4"
      >
        <div>
          <h2 className="text-white text-lg font-semibold md-6 ">About us</h2>
          <p className=" md-4 ">
            Music Schoole is a premier Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil consectetur odio dolores dicta amet quis
            temporibus omnis. Expedita, consequatur quasi?
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold md-6 ">
            Quick Links
          </h2>
          <ul className=" md-4  flex flex-col gap-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold md-6 ">Follow Us</h2>
          <div className="flex items-center gap-2">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instragram</a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold md-4 ">Contact us</h2>
          <p className=" md-4 ">
            377/B,Ashkona,Airport-1230. Mail:hamjanabil11@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
