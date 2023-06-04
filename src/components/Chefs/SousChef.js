import Chef_image4 from "../../assets/Chef-Details/chef-image4.png";

export const SousChef = () => {
  return (
    <>
    <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            The Sous Chef
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Message from the Sous Chef
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          
          <div className="bg-white"></div>

          <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow">
              <img
                className="transform transition duration-700 hover:scale-125"
                src={Chef_image4}
                alt="Chef_image1"
              />
            </div>
            <div className="flex mt-6 space-x-3 ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-xl text-gray-800 poppins">
                  Richard Tambong
                </h1>
                <h3 className="text-gray-800 poppins font-bold">Sous Chef</h3>
                <p className="text-sm text-gray-500 poppins">
                  I want to express my gratitude for your recognition and
                  encouragement of my contributions. Your feedback and
                  constructive criticism have helped me refine my skills and
                  strive for excellence..
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white"></div>

        </div>
      </div>
    
    </>
  )
}
