import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { MainSearch } from "../components/searching/MainSearch";


export const SearchResults = () => {
  const params = useParams();
  useFetch(params.queryTerm);
  useTitle(`${params.queryTerm} | Search Results`);

  return (
    <>
    <Navbar />
    <MainSearch />
    <Footer />
    </>
  )
}
