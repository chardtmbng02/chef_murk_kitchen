// import logo from "../../assets/logo_footer.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer
      id="dark-theme"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12"
    >
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">SOLUTIONS</label>
          <ul className="flex flex-col gap-6 ">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">Site Map</label>
          <ul className="flex flex-col gap-6">
            <li>Recipes & Menus</li>
            <li>Ingredients</li>
            <li>Nutrients</li>
            <li>Meals</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400 uppercase">Helpful Links</label>
          <ul className="flex flex-col gap-6 ">
            <li>Subscriptions</li>
            <li>Contact Us</li>
            <li>Advertisements</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400 uppercase">
            Food Innovation Group
          </label>
          <ul className="flex flex-col gap-6 ">
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
          &copy; 2023 Murk Technology Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
