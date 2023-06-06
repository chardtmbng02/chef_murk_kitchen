import { Link } from "react-router-dom";
import "../Accounts/Accounts.css"
export const SignInForm = () => {
  return (
    <section className="pt-20 signup-bg">
      <div className="flex flex-col justify-center items-center border-gray-200">
        <form className="bg-white w-96 mt-6 p-4 pb-5 mb-10 rounded-lg shadow-xl border border-gray-300">
        <p className="text-3xl font-bold text-center pb-4 murk-text-secondary">Sign In</p>
        <p className="text-1xl text-center pb-3">It's free and only takes a minute</p>

          <div className="flex flex-col space-y-6">
            <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="email" placeholder="Email Address" name="email"/>
            <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="password" placeholder="Password" name="password"/>
          </div>
          <button className="flex items-center w-full py-3 mt-6 bg-red-700 space-x-3 justify-center border border-gray-300 rounded-lg cursor-pointer text-white hover:bg-red-600">
            Sign In
          </button>

          <Link to="/signin"><p className="text-sm text-blue-700 text-center mt-3 hover:underline">
            Forgotten password?
          </p></Link>

          <div className="border-t border-gray-200 mt-5">
            <p className="text-center text-gray-400 py-1">OR</p>
            <div className="flex items-center space-x-3 justify-center border border-gray-400 rounded-lg w-full py-3 cursor-pointer hover:bg-red-300">
              <span className="poppins">Sign In with Google</span>
            </div>

            <div className="flex items-center space-x-3 justify-center border border-gray-400 rounded-lg w-full py-3 mt-2 cursor-pointer hover:bg-red-300">
              <span className="poppins">Sign In with Facebook</span>
            </div>
          </div>
        </form>
        <div className="text-center py-10">
        <span className="text-sm text-gray-500">&copy; 2023 Murk Techology Solutions. Philippines. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};
