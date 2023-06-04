import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorMessage } from "./components/ErrorMessage";
import { RecipeDetails } from "./pages/RecipeDetails";
import { SearchResults } from "./pages/SearchResults";

function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe/details/:id" element={<RecipeDetails />} />
          <Route path="/search/:queryTerm" element={<SearchResults />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
