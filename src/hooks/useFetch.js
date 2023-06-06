import { useState, useEffect } from "react";
// import { API_ID, API_KEY } from "../constant/index";

const useFetch = (queryTerm) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   `https://api.edamam.com/api/recipes/v2?type=public&q=${queryTerm}&app_id=${API_ID}&app_key=${API_KEY}`
        // );
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${queryTerm}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
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
