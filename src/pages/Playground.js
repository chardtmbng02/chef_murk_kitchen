import { Link } from "react-router-dom";
export const Playground = () => {
  return (
    <>
      <form id="search-food" className="max-w-lg mx-auto lg:mx-0">
        <div className="mt-5 flex rounded-xl bg-white ring-1 ring-gray-300 py-2 pr-2 shadow-m shadow-black/5 focus-within:ring-2 focus-within:ring-red-600">
          <input
            type="text"
            placeholder="Search for food"
            value=""
            className="-my-2 flex-auto pl-6 pr-2 text-base text-slate-900 focus:outline-none"
          />
          <Link to="search/">
            <button
              className="inline-flex justify-center rounded-lg bg-red-700 p-2.5 text-base text-white hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 active:text-white/70"
              type="submit"
            >
              <span className="sr-only sm:not-sr-only">Search Now</span>
              <span className="sm:hidden">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="m14 7 5 5-5 5M19 12H5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
