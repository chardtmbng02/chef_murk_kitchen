import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SubHeader } from "../components/Header/SubHeader";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export const ContactUs = () => {
  useTitle("Contact | Chef Murk Kitchen");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <SubHeader />
    <Contact />
    <Footer />
    </>
  )
};
