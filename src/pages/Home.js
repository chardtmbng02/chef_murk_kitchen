import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Foods } from "../components/Foods/Foods";
import { Footer } from "../components/Footer/Footer";
import { ChefDetails } from "../components/Chefs/ChefDetails";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Chef Murk Kitchen | Homepage");
  return (
    <>
    <Navbar />
    <Header />
    <Foods />
    <ChefDetails />
    <Footer />
    </>
  )
}
