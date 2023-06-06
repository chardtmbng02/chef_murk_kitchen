import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

export const MainSearch = () => {
  const params = useParams();
  const { recipes, loading, error } = useFetch(params.queryTerm);
  // useTitle(`Search Results | ${params.queryTerm}`);

  if (loading) {
    return (
      <div class="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div class="flex items-center">
          <span class="text-3xl mr-4">Loading</span>
          <svg
            class="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
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
                  alt="recipe"
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-lg">
                    {recipe.recipe.label}
                  </h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ad ducimus reiciendis tempore sed perferendis.
                  </p>
                  <h4 className="text-gray-900 poppins font-bold">
                    Cook Time: {recipe.recipe.totalTime}
                  </h4>
                  <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                    <Link
                      to={`../recipe/details/recipe_${
                        recipe.recipe.uri.split("_")[1]
                      }`}
                    >
                      Show Recipe
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <span>No Recipe to display</span>
          )}
        </div>
      </section>
    </>
  );
};
