import Chef_image1 from "../../assets/Chef-Details/chef-image1.png";
import Chef_image2 from "../../assets/Chef-Details/chef-image2.png";
import Chef_image3 from "../../assets/Chef-Details/chef-image3.png";

export const ChefDetails = () => {
  return (
    <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
         Professional Chefs
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <h5 className="poppins text-gray-500 pb-4 text-center">
        Messages from the Chef Murk Kitchen Staffs
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image1}
              alt="Chef_image1"
            />
          </div>

          <div className="flex mt-6 space-x-3 ">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">
                Keith Nomer Hapa
              </h1>
              <h3 className="text-gray-800 poppins font-bold">
                Assistant Chef
              </h3>
              <p className="text-sm text-gray-500 poppins">
                The kitchen, my friends, is a realm of creativity and passion.
                It is a place where ingredients from different corners of the
                world harmonize and where techniques are honed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image2}
              alt="Chef_image2"
            />
          </div>

          <div className="flex mt-6 space-x-3 ">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">
                Ulrick Gil Sanchez
              </h1>
              <h3 className="text-gray-800 poppins font-bold">Head Chef</h3>
              <p className="text-sm text-gray-500 poppins">
                As a head chef, I have the privilege of steering the ship, but I
                understand that true greatness lies in collaboration and the
                collective efforts of each and every one of you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
          <div className="overflow-hidden rounded-2xl flex flex-grow">
            <img
              className="transform transition duration-700 hover:scale-125"
              src={Chef_image3}
              alt="Chef_image3"
            />
          </div>

          <div className="flex mt-6 space-x-3 ">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl text-gray-800 poppins">Mel Marx Sia</h1>
              <h3 className="text-gray-800 poppins font-bold">
                Assistant Chef
              </h3>
              <p className="text-sm text-gray-500 poppins">
                It is with great pleasure that I stand before you today as your
                assistant chef. I am here to lend a helping hand, to infuse our
                culinary journey with flavor, and to serve up a delicious
                experience for all of your senses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
