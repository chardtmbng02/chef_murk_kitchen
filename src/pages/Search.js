import { Footer } from "../components/Footer/Footer";
import { SubHeader } from "../components/Header/SubHeader";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SubSearch } from "../components/searching/SubSearch";

export const Search = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
    <NavigationBar />
    <SubHeader />
    <SubSearch />
    <Footer />
    </>
  )
}
