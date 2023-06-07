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

      <div class="py-10 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div class="sm:w-6/12 order-last sm:order-first">
            <ul class="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                  
                      <img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev1}
                      />
                    
                  </div>
                  <div class="text-center">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/mher003"
                        class="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Keith Nomer Hapa
                      </Link>
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      Front End Developer
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                 
                      <img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev2}
                      />
                
                  </div>
                  <div class="text-center">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/melmarxduh"
                        class="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Mel Marx Sia
                      </Link>
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      Back End Developer
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    
                      <img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev3}
                      />
                 
                  </div>
                  <div class="text-center">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                        to="https://www.facebook.com/ulricksanchez"
                        class="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Ulrick Gil Sanchez
                      </Link>
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    
                      <img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev4}
                      />
                    
                  </div>
                  <div class="text-center">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <Link
                        to="https://www.facebook.com/rdltmbng02"
                        class="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        Richard Tambong
                      </Link>
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
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
