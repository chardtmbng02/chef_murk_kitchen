import { useState, useEffect } from "react";
import { API_ID, API_KEY, API_URL } from "../constant/index";

const useFetch = (queryTerm) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?type=public&q=${queryTerm}&app_id=${API_ID}&app_key=${API_KEY}`
        );

      
// https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=8d17ec8e&app_key=53e5cb282778f09c8653ca51427757b2&diet=low-fat

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.hits);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { recipes, loading, error };
};

export default useFetch;
