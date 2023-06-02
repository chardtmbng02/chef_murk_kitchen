import { useState, useEffect } from "react";
import { API_ID, API_KEY, API_URL } from "../../constant/index";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export const Recipe_details = () => {

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
        console.log(params.id);
        console.log(data);
        console.log(data.recipe.label);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pageTitle = useTitle(`${recipes.label} Recipe`)
  return (
    <>
  
    <div className="mt-20">{recipes.label}</div>
    <div>{recipes.uri}</div>
    <div>{recipes.mealType}</div>
    <div>{recipes.totalWeight}</div>
    <div>{recipes.yield}</div>
    </>
  );
  
};
