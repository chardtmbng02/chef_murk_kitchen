import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { MainSearch } from "../components/searching/MainSearch";
import { useEffect } from "react";
import { SubHeader } from "../components/Header/SubHeader";

export const SearchResults = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const params = useParams();
  useFetch(params.queryTerm);
  useTitle(`${params.queryTerm} | Search Results`);

  return (
    <>
    <Navbar />
    <SubHeader />
    <MainSearch />
    <Footer />
    </>
  )
}
