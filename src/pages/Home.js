import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { FoodList } from "../components/Foods/FoodList";
import { Footer } from "../components/Footer/Footer";
import { ChefDetails } from "../components/Chefs/ChefDetails";
import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";
import { SousChef } from "../components/Chefs/SousChef";

export const Home = () => {
  useTitle("Chef Murk Kitchen | Homepage");

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <Navbar />
    <MainHeader />
    <FoodList />
    <ChefDetails />
    <SousChef />
    <Footer />
    </>
  )
}
