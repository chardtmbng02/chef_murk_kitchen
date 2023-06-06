import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SignUpForm } from "../components/Accounts/SignUpForm";
import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";

export const SignUp = () => {
    useTitle("Sign Up | Chef Murk Kitchen");

    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  return (
    <>
    <NavigationBar />
    <SignUpForm />
    </>
  )
}
