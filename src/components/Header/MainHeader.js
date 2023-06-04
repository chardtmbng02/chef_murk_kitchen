import { useState } from "react";
import { Link } from "react-router-dom";
import header_pic  from "../../assets/Header-Images/header-pic.jpg"

export const MainHeader = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    
    <section className="relative py-28 bg-slate-50 header-banner">   
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left mb-6">
              <h1 className="max-w-lg mx-auto lg:mx-0 text-3xl md:text-5xl font-bold mb-5 text-gray-900">
                <span className="block murk-text-red-700">
                  Discover the endless
                </span>
                <span className="murk-textcolor-secondary">
                  possibilities with our website
                </span>
              </h1>
              <p className="max-w-lg mx-auto lg:mx-0 text-gray-600">
                Explore our extensive range of food recipes and find everything
                you need to enhance your healthy diet
              </p>
            </div>
            <div>
              <form id="search-food" className="max-w-lg mx-auto lg:mx-0">
                <div className="mt-5 flex rounded-xl bg-white ring-1 ring-gray-300 py-2 pr-2 shadow-m shadow-black/5 focus-within:ring-2 focus-within:ring-red-600">
                  <input
                    type="text"
                    placeholder="Search for food"
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                    value={inputValue}
                    className="-my-2 flex-auto pl-6 pr-2 text-base text-slate-900 focus:outline-none"
                  />
                  <Link to={`search/${inputValue}`}>
                    <button className="inline-flex justify-center rounded-lg bg-red-700 p-2.5 text-base text-white hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 active:text-white/70" type="submit">
                      <span className="sr-only sm:not-sr-only">Search Now</span>
                      <span className="sm:hidden">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                          <path d="m14 7 5 5-5 5M19 12H5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block lg:flex justify-center mr-6">
            <div className="rounded-3xl shadow-lg shadow-gray-40 overflow-hidden">
              <img
                className="w-full h-full object-cover header-pic"
                src={header_pic}
                alt="foodpic"
              />
            </div>
          </div>


 
        </div>
      </div>
    </section>
  );
};
