import { useState, useEffect } from "react";
import { API_ID, API_KEY, API_URL } from "../../constant/index";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
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
          `${API_URL}recipe_${params.id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
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
      <div class="container px-4 py-8 mx-auto">
        <div class="flex flex-col md:flex-row">
          <div class="bg-white p-8 mb-4 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">{recipes.label}</h1>
            <div className="food-pic-full">
              <img src={recipes.image} alt="recipe" className="w-full rounded-lg food-pic-md" />
            </div>
          </div>

          <div class="bg-white p-8">
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

      <ScrollToTop smooth />
    </>
  );
};
