import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorMessage } from "./components/ErrorMessage";
import { RecipeDetails } from "./pages/RecipeDetails";
import { SearchResults } from "./pages/SearchResults";

function App() {
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
