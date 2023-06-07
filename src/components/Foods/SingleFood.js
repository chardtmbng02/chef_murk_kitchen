import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Foods.css";

export const SingleFood = () => {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/recipe_${params.id}?type=public&&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.recipe);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink text-3xl poppins mx-5 text-gray-500">
          Recipe Details
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <h5 className="poppins text-gray-500 pb-5 text-center">
      Deliciously crafted flavors, made with love and precision.
      </h5>

      <div class="bg-white py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={recipes.image}
                  alt="Productimg"
                />
              </div>
              
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold mb-2">{recipes.label}</h2>
              <p class="text-gray-600 text-sm mb-4">
                &nbsp;
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700">Yield : </span>
                  <span class="text-gray-600">{recipes.yield}</span>
                </div>
                <div>
                  <span class="font-bold text-gray-700">Type : </span>
                  <span class="text-gray-600">{recipes.dishType} - {recipes.cuisineType}</span>
                </div>
              </div>
              <div class="mb-4">
                <span class="font-bold text-gray-700">Calories :</span>
                <p class="text-gray-600 text-sm mt-2">
                  {recipes.calories}
                </p>
              </div>
              <div class="mb-4">
                <span class="font-bold text-gray-700">Source :</span>
                <p class="text-gray-600 text-sm mt-2">
                  {recipes.source}
                </p>
              </div>
              <div>
                <span class="font-bold text-gray-700">Ingredient Lines :</span>
                <p class="text-gray-600 text-sm mt-2">
                  {recipes.ingredientLines}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
