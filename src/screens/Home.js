import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Foods } from "../components/Foods/Foods";
import { Footer } from "../components/Footer/Footer";
import { Chef_Details } from "../components/Chefs/Chef_Details";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  const pageTitle = useTitle("Chef Murk Kitchen | Homepage");
  return (
    <>
    <Navbar />
    <Header />
    <Foods />
    <Chef_Details />
    <Footer />
    </>
  )
}
