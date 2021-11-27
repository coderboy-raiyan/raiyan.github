import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburger = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="">
      <Wrapper>
        <Navbar>
          <div className="navbar-brand">
            <Link className="text-4xl font-bold" to="/">
              R.
            </Link>
          </div>
          <ul className="main-navbar lg:flex space-x-8 items-center hidden">
            <li>
              <Link className="font-medium text-pink-500" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 font-medium hover:text-pink-500"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 font-medium hover:text-pink-500"
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <button className="btn">Let's talk</button>
            </li>
          </ul>

          {/* Hamburger icon */}
          <div
            className="hamburger-main lg:hidden cursor-pointer "
            onClick={hamburger}
          >
            <div
              className={
                isClicked
                  ? "w-8 bg-red-400 h-0.5 rounded mb-2 transform rotate-45 translate-y-3.5 transition-all"
                  : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
              }
            ></div>
            <div
              className={
                isClicked
                  ? "w-8 bg-red-400 h-0.5 rounded mb-2 opacity-0 transition-all"
                  : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
              }
            ></div>
            <div
              className={
                isClicked
                  ? "w-8 bg-red-400 h-0.5 rounded mb-2 transform -translate-y-1.5 -rotate-45  transition-all"
                  : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
              }
            ></div>
          </div>
        </Navbar>
      </Wrapper>
    </header>
  );
};

export default Header;

const Wrapper = tw.div`
nav container mx-auto px-4 
`;
const Navbar = tw.nav`
flex justify-between items-center py-5
`;
