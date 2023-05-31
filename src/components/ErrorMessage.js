import errorImg from "../assets/error.png";
import { Link } from "react-router-dom";



export const ErrorMessage = () => {
  return (
    <main className=" h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        <div className="flex flex-col items-center justify-center h-3/4">
          <img className="w-96 object-contain" src={errorImg} alt="error" />
          <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-10 transform transition duration-300 hover:scale-105">
           <Link to="/">Go back to home</Link>
          </button>
        </div>
      </div>
    </main>
  );
};
