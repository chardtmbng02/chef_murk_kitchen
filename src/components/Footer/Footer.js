import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer
      id="chefftr"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12 footer-banner"
    >
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 text-center ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">Solutions</label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">Site Map</label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>Recipes & Menus</li>
            <li>Ingredients</li>
            <li>Nutrients</li>
            <li>Meals</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">Helpful Links</label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>Subscriptions</li>
            <Link to="/contact" className="text-gray-500 hover:text-red-600"><li>Contact Us</li></Link>
            <li>Advertisements</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">
            Food Innovation Group
          </label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>The Chef Murk App</li>
            <li>Bon Appetit</li>
            <li>Gourmet</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="mx-auto">
          <span className="font-bold">Chef Murk Kitchen</span>
          <p className="text-gray-500">&copy; 2023 Murk Technology Solutions. Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
