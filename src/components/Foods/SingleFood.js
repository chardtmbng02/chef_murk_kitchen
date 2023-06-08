import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Foods.css";

export const SingleFood = () => {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutrients, setNutrients] = useState([]);
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
        setIngredients(data.recipe.ingredientLines);
        setNutrients(data.recipe.totalNutrients);
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
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-5 text-gray-500">
            Recipe Details
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="text-xl poppins text-gray-500 pb-5 text-center">
          {recipes.label}
        </h5>

        <div class="py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 mb-4 shadow shadow-xl">
                  <img
                    class="w-full h-full object-cover"
                    src={recipes.image}
                    alt="Productimg"
                  />
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <div className="rounded-md bg-white shadow-md p-8 border border-gray-300 shadow-xl">
                  <div className="text-2xl font-bold text-red-700 mb-4">
                    Nutrition Facts
                  </div>
                  <table class="w-full text-sm leading-5">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="py-3 px-4 text-left font-medium text-gray-600">
                          Nutrients
                        </th>
                        <th class="py-3 px-4 text-left font-medium text-gray-600">
                          Amount per Serving (g)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="py-3 px-4 text-left font-medium text-gray-600">
                          Calories
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(recipes.calories)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">
                          Saturated Fat
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.FASAT?.quantity)}
                          {nutrients.FASAT?.unit}
                        </td>
                      </tr>

                      <tr>
                        <td class="py-3 px-4 text-left font-medium text-gray-600">
                          Cholesterol
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.CHOLE?.quantity)}
                          {nutrients.CHOLE?.unit}
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="py-3 px-4 text-left font-medium text-gray-600">
                          Sodium
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.NA?.quantity)}{" "}
                          {nutrients.NA?.unit}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 text-left font-medium text-gray-600">
                          Total Carbohydrate
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.CHOCDF?.quantity)}
                          {nutrients.CHOCDF?.unit}
                        </td>
                      </tr>

                      <tr>
                        <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">
                          Sugars
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.SUGAR?.quantity)}
                          {nutrients.SUGAR?.unit}
                        </td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="py-3 px-4 text-left font-medium text-gray-600">
                          Protein
                        </td>
                        <td class="py-3 px-4 text-end pr-10">
                          {Math.round(nutrients.PROCNT?.quantity)}
                          {nutrients.PROCNT?.unit}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-1">
        <div className="container mx-auto px-2">
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-2xl font-bold text-red-700 mb-4">
                  Ingredients
                </div>
                <ul className="list-disc ml-5">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="pt-1">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-2xl font-bold text-red-700 mb-4">
                  More Recipe Info
                </div>
                <ul className="ml-5">
                  <li>
                    <span className="font-bold text-black-500">
                      Dish Type :{" "}
                    </span>{" "}
                    {recipes.dishType}
                  </li>
                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                      Cuisine Type :{" "}
                    </span>{" "}
                    {recipes.cuisineType}
                  </li>
                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                      Meal Type :{" "}
                    </span>{" "}
                    {recipes.mealType}
                  </li>

                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                    Cautions :{" "}
                    </span>
                    {recipes.cautions}
                  </li>

                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                    Yield :{" "}
                    </span>
                    {recipes.yield}
                  </li>

                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                    Daily Weight :{" "}
                    </span>
                    {recipes.totalWeight}
                  </li>

                  <li className="pt-2">
                    <span className="font-bold text-black-500">
                    Cooking Time :{" "}
                    </span>
                    {recipes.totalTime} Mins
                  </li>


                </ul>

                
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-2xl font-bold text-red-700 mb-4">
                  Reference Links
                </div>
                <ul className="ml-5">
                  <li>
                    <span className="flex font-bold text-black-500">Tutorial :  </span>
                    <Link to={recipes.url} target="_blank" className="text-gray-600 hover:text-red-600">Open Website</Link>
                  </li>
                  <li>
                    <span className="flex font-bold text-black-500 mt-2">ShareAs :  </span>
                    <Link to={recipes.shareAs} target="_blank" className="text-gray-600 hover:text-red-600">Open Website</Link>
                  </li>
                 
   
                </ul>

                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
