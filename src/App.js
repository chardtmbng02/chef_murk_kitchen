import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorMessage } from "./components/ErrorMessage";
import { Search } from "./pages/Search";
import { SearchResults } from "./pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe/results/:id" element={<SearchResults  />} />
          <Route path="/search/:queryTerm" element={<Search />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
