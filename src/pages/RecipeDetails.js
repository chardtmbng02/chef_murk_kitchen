import { useState, useEffect } from "react";
import { API_ID, API_KEY } from "../constant/index";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Navbar } from "../components/Navbar/Navbar";
import { SubHeader } from "../components/Header/SubHeader";
import { Footer } from "../components/Footer/Footer";
import { SingleFood } from "../components/Foods/SingleFood";
import ScrollToTop from "react-scroll-to-top";

export const RecipeDetails = () => {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?recipe_${params.id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
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

  useTitle(`${recipes.label} Recipe`);
  return (
    <>
    <ScrollToTop smooth />
      <Navbar />
      <SubHeader />
      <SingleFood />
      <Footer />
    </>
  );
};
