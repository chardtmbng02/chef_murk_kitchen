import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const FoodList = () => {
  const { recipes, loading, error } = useFetch();
  if (loading) {
    return (
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div className="flex items-center">
          <span className="text-3xl mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">{error.message} Records from API</div>
    );
  }

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Featured Recipes
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Explore the Top 20 Recipes from around the globe.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
                key={recipe.recipe.uri}
              >
                <span
                  className={`${recipe.recipe.mealType} bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4`}
                >
                  {recipe.recipe.mealType}
                </span>
                <img
                  className="w-64 mx-auto transform transition duration-300 hover:scale-105 rounded-3xl"
                  src={recipe.recipe.image}
                  alt="img-recipe"
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-md text-center">
                    {recipe.recipe.label}
                  </h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    Dish Type : {recipe.recipe.dishType}
                  </p>
                  <p className="text-gray-500 poppins text-sm text-center">
                    Cuisine Type : {recipe.recipe.cuisineType}
                  </p>
                  {/* <h4 className="text-gray-900 poppins font-bold">
                    Cook Time: {recipe.recipe.totalTime}
                  </h4> */}
                  <button className="bg-red-700 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:bg-red-600 scale-105">
                    <Link
                      to={`recipe/details/${recipe.recipe.uri.split("_")[1]}`}
                    >
                      Show Recipe{" "}
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <span>No Recipe's Found</span>
          )}
        </div>

        {/* Start of Pagination */}
        <div class="flex flex-1 mx-auto w-100 max-w-lg px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
          <div class="flex justify-between flex-1 sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 opacity-50 cursor-not-allowed"
              data-id="pagination-prev"
              disabled=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Previous
            </button>
            <button
              type="button"
              class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 "
              data-id="pagination-next"
            >
              Next{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div
              class="relative z-0 flex justify-between w-full -space-x-px rounded-md"
              aria-label="Pagination"
            >
              <button
                type="button"
                class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md opacity-50 cursor-not-allowed"
                data-id="pagination-prev"
                disabled=""
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Previous Page
              </button>
              <button
                type="button"
                class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md"
                data-id="pagination-next"
              >
                Next Page{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* End of Pagination */}
      </div>
    </section>
  );
};
