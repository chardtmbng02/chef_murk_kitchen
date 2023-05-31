import { useState, useEffect } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d17ec8e&app_key=53e5cb282778f09c8653ca51427757b2%09");
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
