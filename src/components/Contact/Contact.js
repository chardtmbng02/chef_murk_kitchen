
export const Contact = () => {
  return (
    <section className="bg-white py-16 mx-auto">
    <div className="container mx-auto px-10">
      <h2 className="text-3xl font-semibold mb-20 text-center">Let's Start a Conversation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" for="name">Fields are required *</label>
              <label className="block text-gray-700 font-semibold mb-2" for="name">Name</label>
              <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" for="email">Email</label>
              <input className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" for="message">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" type="submit">Send Message</button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">Lawton Ave, Mckinley West, Taguig, 1634 Metro Manila, Philippines.</p>
          <p className="mb-2">(123) 456-7890</p>
          <p className="mb-2">sup.murktechsolutions@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  )
}
