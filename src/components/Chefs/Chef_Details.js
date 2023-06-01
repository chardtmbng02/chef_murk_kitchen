import Chef_image1 from "../../assets/chef_details/chef-image1.png";
import Chef_image2 from "../../assets/chef_details/chef-image2.png";
import Chef_image3 from "../../assets/chef_details/chef-image3.png";

export const Chef_Details = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4 text-center">Why you choose us</h1>
      <h5 className="poppins text-gray-500 pb-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta atque sunt corrupti quae officia labore?</h5>
   

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
    
          <div className="flex mt-6 space-x-3 ">
            
            <div className="flex flex-col space-y-3">
              
              <h1 className="text-xl text-gray-800 poppins">Keith Nomer Hapa</h1>
              <h3 className="text-gray-800 poppins font-bold">Assistant Chef</h3>
              <p className="text-sm text-gray-500 poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi a natus, optio ut unde, nisi perferendis eius ab placeat enim ipsam nulla commodi totam atque reprehenderit iusto delectus facilis.</p>
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
    
          <div className="flex mt-6 space-x-3 ">
            
            <div className="flex flex-col space-y-3">
              
              <h1 className="text-xl text-gray-800 poppins">Ulrick Gil Sanchez</h1>
              <h3 className="text-gray-800 poppins font-bold">Head Chef</h3>
              <p className="text-sm text-gray-500 poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi a natus, optio ut unde, nisi perferendis eius ab placeat enim ipsam nulla commodi totam atque reprehenderit iusto delectus facilis.</p>
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
    
          <div className="flex mt-6 space-x-3 ">
            
            <div className="flex flex-col space-y-3">
              
              <h1 className="text-xl text-gray-800 poppins">Mel Marx Sia</h1>
              <h3 className="text-gray-800 poppins font-bold">Assistant Chef</h3>
              <p className="text-sm text-gray-500 poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi a natus, optio ut unde, nisi perferendis eius ab placeat enim ipsam nulla commodi totam atque reprehenderit iusto delectus facilis.</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};
