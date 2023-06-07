import { useState, useEffect } from "react";
// import { API_ID, API_KEY } from "../constant/index";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SubHeader } from "../components/Header/SubHeader";
import { Footer } from "../components/Footer/Footer";
import { SingleFood } from "../components/Foods/SingleFood";
// import { FoodSection } from "../components/Foods/FoodSection";

export const RecipeDetails = () => {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/${params.id}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
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

  useTitle(`${recipes.label} | Chef Murk Kitchen`);
  return (
    <>
      <NavigationBar />
      <SubHeader />
      <SingleFood />
      {/* <FoodSection /> */}
      <Footer />
    </>
  );
};
