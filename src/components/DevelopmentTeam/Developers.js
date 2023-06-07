import Dev1 from "../../assets/Dev-Details/dev-image1.png";
import Dev2 from "../../assets/Dev-Details/dev-image2.png";
import Dev3 from "../../assets/Dev-Details/dev-image3.png";
import Dev4 from "../../assets/Dev-Details/dev-image4.png";
import { Link } from "react-router-dom";

export const Developers = () => {
  return (
    <>
<div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
<div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Development Team
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Let us know something about the developers.
        </h5>

      <div className="py-10 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="sm:w-6/12 order-last sm:order-first">
            <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                  
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev1} alt="dev1"
                      />
                    
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/mher003"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Keith Nomer Hapa
                      </Link>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Front End Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                 
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev2} alt="dev2"
                      />
                
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/melmarxduh"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Mel Marx Sia
                      </Link>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Back End Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev3} alt="dev3"
                      />
                 
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/ulricksanchez"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Ulrick Gil Sanchez
                      </Link>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev4} alt="dev4"
                      />
                    
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <Link
                        to="https://www.facebook.com/rdltmbng02"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Richard Tambong
                      </Link>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                     Team Leader
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
              Murk Technology Solutions
            </p>
            <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              Meet Our <span class="text-red-700">Team</span>
            </h3>
            <p class="mt-4 text-md leading-7 text-gray-500 font-light">
              Together we are achieving great things — the work we do matters. We
              are proud of who we are. So tomorrow and the next day and in the
              future, when you feel discouraged or exhausted, you will remember
              what we have achieved and lean in on your team for support.
              <br />
              <br />
              Let them make you even hungrier to succeed.
              <br />
              <br />
              - MURK -
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
