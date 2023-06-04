import { Navbar } from "../components/Navbar/Navbar";
import { SignInForm } from "../components/Accounts/SignInForm";
import { Footer } from "../components/Footer/Footer";
import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";
import { SubHeader } from "../components/Header/SubHeader";

export const SignIn = () => {
    useTitle("Sign In | Chef Murk Kitchen");

    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  return (
    <>
    <Navbar />
    <SubHeader />
    <SignInForm />
    <Footer />
    </>
  )
}
