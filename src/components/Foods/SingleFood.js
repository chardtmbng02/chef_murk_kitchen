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
      <section>
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

        <div class="py-8">
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
                <p class="text-gray-600 text-sm mb-4">&nbsp;</p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700">Yield : </span>
                    <span class="text-gray-600">{recipes.yield}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700">Type : </span>
                    <span class="text-gray-600">
                      {recipes.dishType} - {recipes.cuisineType}
                    </span>
                  </div>
                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700">Calories :</span>
                  <p class="text-gray-600 text-sm mt-2">{recipes.calories}</p>
                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700">Source :</span>
                  <p class="text-gray-600 text-sm mt-2">{recipes.source}</p>
                </div>
                <div>
                  <span class="font-bold text-gray-700">
                    Ingredient Lines :
                  </span>
                  <div class="text-gray-600 text-sm mt-2"></div>
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
                    <tr class="bg-gray-50">
                      <td class="py-3 px-4 text-left font-medium text-gray-600">
                        Total Fat
                      </td>
                      <td class="py-3 px-4 text-end pr-10">
                        {Math.round(nutrients.FAT?.quantity)}{" "}
                        {nutrients.FAT?.unit}
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
                    <tr class="bg-gray-50">
                      <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">
                        Trans Fat
                      </td>
                      <td class="py-3 px-4 text-end pr-10">
                        {Math.round(nutrients.FATRN?.quantity)}
                        {nutrients.FATRN?.unit}
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
                    <tr class="bg-gray-50">
                      <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">
                        Dietary Fiber
                      </td>
                      <td class="py-3 px-4 text-end pr-10">
                        {Math.round(nutrients.FIBTG?.quantity)}
                        {nutrients.FIBTG?.unit}
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

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-2xl font-bold text-red-700 mb-4">
                  More Food Info
                </div>
                <div class="md:flex-1 px-4">
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700">Yield : </span>
                    <span class="text-gray-600">{recipes.yield}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700">Type : </span>
                    <span class="text-gray-600">
                      {recipes.dishType} - {recipes.cuisineType}
                    </span>
                  </div>
                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700">Source :</span>
                  <p class="text-gray-600 text-sm mt-2">{recipes.source}</p>
                </div>
                <div>
                  <span class="font-bold text-gray-700">
                    Ingredient Lines :
                  </span>
                  <div class="text-gray-600 text-sm mt-2"></div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
