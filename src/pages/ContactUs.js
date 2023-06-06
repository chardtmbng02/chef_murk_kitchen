import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { Contact } from "../components/Contact/Contact";
import { ContactHeader } from "../components/Header/ContactHeader";
import { SubHeader } from "../components/Header/SubHeader";
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
      <ContactHeader />
      <Contact />
      <Footer />
    </>
  );
};
