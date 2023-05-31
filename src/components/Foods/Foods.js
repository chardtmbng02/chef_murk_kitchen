import { Link } from "react-router-dom";

export const Foods = () => {
  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        <p className="menu_tab poppins"> Breakfast </p>
        <p className="menu_tab poppins"> Lunch </p>
        <p className="menu_tab poppins"> Dinner </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {/* Food 1 */}
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Lunch
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/ccZyWng/breakfast1.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Bacon and Egg Combo</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad ducimus reiciendis tempore sed perferendis.
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P55.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>

        {/* Food 2 */}

        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Breakfast
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/Bnz8Zv2/breakfast2.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Fruity Sandwich</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio impedit pariatur dicta nemo dolor sunt?
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P105.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>

        {/* Food 3 */}
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Dinner
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/mXYbPcv/breakfast3.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Meat Overload</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis deleniti officia esse dignissimos animi?
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P85.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>

        {/* Food 4 */}
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Breakfast
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/87MwqqT/breakfast4.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Bread Veggie</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita quam minus deleniti eum laboriosam suscipit ratione, tempora architecto sunt!
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P90.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>

        {/* Food 5 */}
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Lunch
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/92mtcwx/breakfast5.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Triangle Bacon Sandwich</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, praesentium? Accusamus obcaecati sunt atque fugiat eligendi.
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P65.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>

        {/* Food 6 */}
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
            Dinner
          </span>
          <img
            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
            src="https://i.ibb.co/hHGc7sm/breakfast6.png"
            alt=""
          />
          <div className="flex flex-col items-center my-3 space-y-2">
            <h1 className="text-gray-900 poppins text-lg">Tomato Egg with Bread</h1>
            <p className="text-gray-500 poppins text-sm text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugit esse maiores ex. Maiores fugiat impedit rem.
            </p>
            <h2 className="text-gray-900 poppins text-2xl font-bold">P120.00</h2>
            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
              <Link to="/tutorial/1">COOK IT </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
