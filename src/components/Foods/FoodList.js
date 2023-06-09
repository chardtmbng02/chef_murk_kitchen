import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const FoodList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=popular&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(recipes);

  if (loading) {
    return (
      <div class="murk-success-fetch absolute bg-white z-20 h-full w-full flex items-center justify-center">
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
    return (
      <div className="murk-failed-fetch text-xl font-semibold mx-10">
        Sorry but the API you are trying to fetch from reached it's limit. Try
        again later.
      </div>
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
            recipes.hits.slice(5, 14).map((recipe) => (
              <Link to={`recipe/details/${recipe.recipe.uri.split('_')[1]}`}>
                <div
                  className="text-center bg-white shadow-xl border border-gray-100 transition transform duration-700 hover:shadow-2xl hover:scale-105 p-4 rounded-lg relative"
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
