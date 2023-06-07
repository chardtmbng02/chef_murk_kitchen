import React from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SubSearch = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  };

  const handleSearch = () => {
    navigate(`/search/${inputValue}`);
  };

  return (
    <>
      <section className="search-body h-96 w-full bg-yellow-50">
        <div className="flex flex-col items-center justify-center h-full">
          <form
            onSubmit={handleFormSubmit}
            class="flex flex-col md:flex-row gap-3"
          >
            <div class="flex mx-20 bg-white">
              <input
                type="text"
                placeholder="Search now ..."
                class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-red-500 focus:outline-none focus:border-red-500"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                onClick={handleSearch}
                class="bg-red-700 text-white rounded-r px-2 md:px-3 py-0 md:py-1 hover: bg-red-700"
              >
                Search
              </button>
            </div>

            {/* <select
              id="Type"
              name="Type"
              class="w-full h-10 border-2 border-red-500 focus:outline-none focus:border-red-500 text-red-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option value="optall" selected="">
                Cuisine Type
              </option>
              <option value="opt1">Asian</option>
              <option value="opt2">Chinese</option>
              <option value="opt3">American</option>
            </select> */}
          </form>
        </div>
      </section>
    </>
  );
};
