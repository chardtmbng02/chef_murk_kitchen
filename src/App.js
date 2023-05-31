import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import {Tutorial} from "./screens/Tutorial";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tutorial/:id" element={<Tutorial />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
