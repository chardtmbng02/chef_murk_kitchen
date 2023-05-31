import logo from "../../assets/logo_footer.png";
export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-6 py-12">
      <div className=" max-w-screen-xl mx-auto px-6">
        <div className="flex pb-8">

        <div className="flex flex-grow">
            <img className="w-52" src={logo} alt="logo" />
        </div>

          <div className="flex space-x-12">
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Column 1</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Column 2</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Column 3</span>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-8">
          <div className="flex flex-grow">
            <span className="poppins text-gray-600">
              Murk Technology Solutions &copy; 2023 - All rights reserved.{" "}
            </span>
          </div>

          <div className="flex justify-end items-center space-x-6">
            <span className="poppins text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="poppins text-white cursor-pointer">
              Terms of Use
            </span>
            <span className="poppins text-white cursor-pointer">Legal information</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
