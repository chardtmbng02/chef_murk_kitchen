import Logo from "../../assets/Contact-Images/address-map.png"
import "../Contact/Contact.css"

export const Contact = () => {
  return (
    <section className="bg-white mx-auto">
      <div class="murk-nav-bg mb-5">
        <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 text-center">
            Frequently asked questions
          </h2>
          <div class="mt-6 border-t-4 border-gray-700 pt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <dl>
                <dt class="font-medium leading-6 text-gray-900 text-lg mt-4">
                  What is Chef Murk Kitchen?
                </dt>
                <dd class="mt-4">
                  <p class="leading-6 text-base text-gray-500">
                    Our return policy allows customers to return products within
                    30 days of purchase for a full refund or exchange.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt class="font-medium leading-6 text-gray-900 text-lg mt-4">
                  Am I required to register my own account?
                </dt>
                <dd class="mt-4">
                  <p class="leading-6 text-base text-gray-500">
                    You can track your order by logging into your account on our
                    website and viewing the tracking information provided.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt class="font-medium leading-6 text-gray-900 text-lg mt-4">
                  What are the different cuisine type you offers?
                </dt>
                <dd class="mt-4">
                  <p class="leading-6 text-base text-gray-500">
                    We offer standard and expedited shipping options for all
                    orders. Delivery times and prices will vary depending on
                    your location and the size of your order.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt class="font-medium leading-6 text-gray-900 text-lg mt-4">
                  What are the hours of operation?
                </dt>
                <dd class="mt-4">
                  <p class="leading-6 text-base text-gray-500">
                    Our customer service department is open Monday-Friday,
                    9am-5pm EST.
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 px-10">
        <h2 className="text-3xl font-semibold mb-20 text-center">
          Let's Start a Conversation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" for="name">
                  Fields are required *
                </label>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              Lawton Ave, Mckinley West, Taguig, 1634 Metro Manila, Philippines.
            </p>
            <p className="mb-2">(123) 456-7890</p>
            <p className="mb-2">sup.murktechsolutions@gmail.com</p>
            <img className="murk-map my-10 shadow-2xl border border-gray-400" src={Logo} alt="map"/>
          </div>
        </div>
      </div>
    </section>
  );
};
