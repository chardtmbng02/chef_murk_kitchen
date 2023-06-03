import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { FoodList } from "../components/Foods/FoodList";
import { Footer } from "../components/Footer/Footer";
import { ChefDetails } from "../components/Chefs/ChefDetails";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Chef Murk Kitchen | Homepage");
  return (
    <>
    <Navbar />
    <MainHeader />
    <FoodList />
    <ChefDetails />
    <Footer />
    </>
  )
}
