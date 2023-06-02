import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <section className="header-banner h-96 w-full bg-yellow-50">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Craving for something to eat?
        </h1>

        <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
          <input
            type="text"
            className="rounded-full px-4 focus:outline-none w-full bg-transparent"
            onSubmit={handleFormSubmit}
            placeholder="Search here"
            onChange={handleInputChange}
            value={inputValue}
          />
          <Link to={`search/${inputValue}`}>
            <button
              type="submit"
              className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
