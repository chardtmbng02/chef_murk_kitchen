import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <div class="container px-6 py-8 mx-auto">

      <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-5 text-gray-500">
            Recipe Details
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-5 text-center">
          Explore the Top 20 Recipes from around the globe.
        </h5>
        <h1 className="text-2xl font-bold mb-4 text-center">{recipes.label}</h1>

        <div class="flex flex-col md:flex-row murk-solid-border">
          <div class="bg-white p-8 md:mb-0">
            <div className="food-pic-full">
              <img
                src={recipes.image}
                alt="recipe"
                className="w-full rounded-lg food-pic-md"
              />
            </div>
          </div>


          <div class="bg-red-300 p-8">
            <h2 className="text-xl font-semibold mb-2">Ingredients :</h2>
            <ul className="list-disc list-inside">
              <li>Ingredients 1</li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Instructions :</h2>
            <ol className="list-decimal list-inside">
              <li>Step 1</li>
            </ol>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row">
          <p>{recipes.ingredientLines}</p>
        </div>

      
      </div>

      
    </>
  );
};
