import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo4.png";

export const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  // header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling
  window.addEventListener("scroll", onChangeHeader);

  return (
      <header
        className={
          changeHeader
            ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
            : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
        }
      >
        <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
          <div className="flex flex-grow">
            <Link to="/"><img className="w-36 cursor-pointer" src={logo} alt="logo" /></Link>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <div className="relative flex cursor-pointer">
              <div className="flex items-center justify-end space-x-6">
                <button className="poppins" > <Link to="/tutorial">Sign In</Link></button>
                <button className="bg-primary px-6 py-3 text-black poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
  );
};
