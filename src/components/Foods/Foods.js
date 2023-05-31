import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const Foods = () => {

  const { recipes, loading, error } = useFetch();

  console.log(recipes.hits)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
   
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        <p className="menu_tab poppins"> Breakfast </p>
        <p className="menu_tab poppins"> Lunch </p>
        <p className="menu_tab poppins"> Dinner </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
      
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            {recipes.hits[0].recipe.dishType}
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src={recipes.hits[0].recipe.image}
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">{recipes.hits[0].recipe.label}</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad ducimus reiciendis tempore sed perferendis.
            </p>
            <h4 className="text-gray-900 poppins font-bold">Cook Time: {recipes.hits[0].recipe.totalTime}</h4>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">Try It </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
