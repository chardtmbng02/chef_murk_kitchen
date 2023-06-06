import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SignInForm } from "../components/Accounts/SignInForm";
import { useTitle } from "../hooks/useTitle";
import { useEffect } from "react";

export const SignIn = () => {
  useTitle("Sign In | Chef Murk Kitchen");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavigationBar />
      <SignInForm />
    </>
  );
};
