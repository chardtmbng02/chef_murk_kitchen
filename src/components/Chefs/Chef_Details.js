import Chef_image1 from "../../assets/chef_details/chef-image1.png";
import Chef_image2 from "../../assets/chef_details/chef-image2.png";
import Chef_image3 from "../../assets/chef_details/chef-image3.png";

export const Chef_Details = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4 text-center">Why you choose us</h1>
      <h5 className="poppins text-gray-500 pb-4 text-center">
      Our team of talented chefs brings you a diverse range of mouthwatering dishes, carefully prepared with the freshest ingredients and delivered right to your doorstep. Whether you're craving comfort food, international cuisine, or healthy options, our online food kitchen is here to satisfy your taste buds and make your dining experience convenient and delicious.
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {/* Chef 1 */}
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image1}
              alt=""
            />
          </div>

          <div className="flex mt-6 space-x-3 text-center">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">
                Keith Nomer Hapa
              </h1>
              <h3 className="text-gray-800 poppins font-bold">
                Assistant Chef
              </h3>
              <p className="text-sm text-gray-500 poppins">A Chef who personally cooked for the Saudi Crown Prince Mohammed bin Salman. Chef Keith knows how to bring you a truly royal experience.
              </p>
            </div>
          </div>
        </div>

        {/* Chef 2 */}
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image2}
              alt=""
            />
          </div>

          <div className="flex mt-6 space-x-3 text-center">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">
                Ulrick Gil Sanchez
              </h1>
              <h3 className="text-gray-800 poppins font-bold">Head Chef</h3>
              <p className="text-sm text-gray-500 poppins">An up and coming star in the culinary industry who's famous for his Filipino-American fusion dishes. He runs his kitchen with military discipline and an artis's creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Chef 3 */}
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image3}
              alt="Chef_image3"
            />
          </div>

          <div className="flex mt-6 space-x-3 text-center">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">Mel Marx Sia</h1>
              <h3 className="text-gray-800 poppins font-bold">
                Assistant Chef
              </h3>
              <p className="text-sm text-gray-500 poppins">Chef Mel brings you authentic Chinese dishes from HongKong and the Mainland straight to your table. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
