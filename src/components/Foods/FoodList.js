import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

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
              strokeWidth="4"
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
      <div id="fdlst" className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Featured Recipes
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Explore the Top Recipes from around the globe.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {recipes.hits.length > 0 ? (
            recipes.hits.slice(1, 7).map((recipe) => (
              
              <Link
              to={`recipe/details/${recipe.recipe.uri.split('_')[1]}`}
            >
              <div
                className="text-center bg-white shadow-xl border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
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
                  <h1 className="text-gray-900 poppins text-center text-md food-label">
                    {recipe.recipe.label}
                  </h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    Dish : {recipe.recipe.dishType}
                  </p>
                  <p className="text-gray-500 poppins text-sm text-center">
                    Cuisine : {recipe.recipe.cuisineType} 
                  </p>

                </div>
              </div>
              </Link>
            ))
          ) : (
            <span>No Recipe's Found</span>
          )}
        </div>
      </div>
    </section>
  );
};
