import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Tutorial } from "./screens/Tutorial";
import { ErrorMessage } from "./components/ErrorMessage";
import { Search } from "./screens/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tutorial/:id" element={<Tutorial />} />
          <Route path="/search/:queryTerm" element={<Search />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
