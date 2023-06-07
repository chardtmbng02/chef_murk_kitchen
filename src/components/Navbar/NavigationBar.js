import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo-2.png";
import "../Navbar/NavigationBar.css";

export const NavigationBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [changeHeader, setChangeHeader] = useState(false);

  // header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling.
  window.addEventListener("scroll", onChangeHeader);

  return (
    <header
      className={
        changeHeader
          ? "nav-header nav-header-solid shadow-xl transition duration-500"
          : "nav-header nav-header-transparent transition duration-500"
      }
    >
      <div className="mx-auto">
        <Link to="/">
          <img
            className="w-36 cursor-pointer mr-img"
            src={Logo}
            alt="chefmurklg"
          />
        </Link>
        <nav className="navigation" ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup"><button className="bg-red-700 px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:bg-red-600 scale-105">
                  Get Started
                </button></Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};
