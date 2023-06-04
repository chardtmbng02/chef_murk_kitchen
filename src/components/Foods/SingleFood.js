import { useState, useEffect } from "react";
import { API_ID, API_KEY, API_URL } from "../../constant/index";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

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
    <div className="mt-20">{recipes.label}</div>
    <div>{recipes.uri}</div>
    <div>{recipes.mealType}</div>
    <div>{recipes.totalWeight}</div>
    <div>{recipes.yield}</div>
    <ScrollToTop smooth />
    </>
  );
  
};
