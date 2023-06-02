import { useState, useEffect } from "react";
import { API_ID, API_KEY, API_URL } from "../constant/index";

const useFetch = (queryTerm) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // https://api.edamam.com/api/recipes/v2/?type=public& [q=${searchQuery}] &app_id=${API_ID}&app_key=${API_KEY}
  // https://api.edamam.com/api/recipes/v2/ [RECIPEID_${RecipeID}] ?type=public&app_id=${API_ID}&app_key=${API_KEY}

  // Start = https://api.edamam.com/api/recipes/v2/

  // Single Recipe Middle = ?type=public& [q=${searchQuery}] 
  // All Recipe  Middle = [RECIPEID_${RecipeID}] ?type=public

  // End = &app_id=${API_ID}&app_key=${API_KEY}

  // const response = await fetch( `https://api.edamam.com/api/recipes/v2${apiPath}$&app_id=${API_ID}&app_key=${API_KEY}`)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?type=public&q=${queryTerm}&app_id=${API_ID}&app_key=${API_KEY}`
        );

      


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
