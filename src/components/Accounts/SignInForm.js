import { Link } from "react-router-dom";
export const SignInForm = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col justify-center items-center border-gray-200">
        <form className="bg-white w-96 mt-6 p-4 pb-5 mb-10 rounded-lg shadow-xl border border-gray-300">
        <p className="text-3xl font-bold text-center pb-4 murk-text-secondary">Sign In</p>
        <p className="text-1xl text-center pb-3">It's free and only takes a minute</p>

          <div className="flex flex-col space-y-6">
            <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="email" placeholder="Email Address" name="email"/>
            <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="password" placeholder="Password" name="password"/>
          </div>
          <button className="w-full py-3 bg-red-700 text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins hover: bg-red-600">
            Sign In
          </button>

          <Link to="/signup"><p className="text-base text-primary text-center my-6 hover:underline">
            Need an account ?
          </p></Link>

          <div className="border-t border-gray-200 mt-6">
            <p className="text-center text-gray-400 py-4">OR </p>
            <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100">
              <span className="poppins">Sign In with Google</span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
