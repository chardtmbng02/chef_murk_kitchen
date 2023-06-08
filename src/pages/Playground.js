export const Playground = () => {
  return (
    <>
      <div class="max-w-screen-lg mx-auto p-5">
        <div class="grid grid-cols-1 md:grid-cols-12 border">
          <div class="bg-gray-900 md:col-span-4 p-10 text-white">
            <p class="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span class="text-indigo-600">Touch</span>
            </h3>
            <p class="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div class="flex items-center mt-5">
   
              <span class="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
              </span>
            </div>
            <div class="flex items-center mt-5">
             
              <span class="text-sm">+93 749 99 65 50</span>
            </div>
            <div class="flex items-center mt-5">
             
              <span class="text-sm">24/7</span>
            </div>
          </div>
          <form class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <div class="md:flex md:items-center">
                  <label class="block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
