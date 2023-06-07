import { useState, useEffect } from 'react';

const useFetch = (queryTerm, nextPageUrl) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(nextPageUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryTerm}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
        if (nextPageUrl) {
          url = nextPageUrl;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [nextPageUrl]);

  return { recipes, loading, error };
};

export default useFetch;
