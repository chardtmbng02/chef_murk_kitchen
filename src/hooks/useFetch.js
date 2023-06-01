import { useState, useEffect } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api_url = "https://api.edamam.com/api/recipes/v2?type=public&q=";
  const q_search = "beef";
  const api_creds = "&app_id=8d17ec8e&app_key=53e5cb282778f09c8653ca51427757b2%09";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api_url + q_search + api_creds);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.hits);
        // setRecipes(data);
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
