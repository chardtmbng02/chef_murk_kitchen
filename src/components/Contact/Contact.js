

export const Contact = () => {
  return (
    <section class="bg-white py-16">
    <div class="container mx-auto px-10">
      <h2 class="text-3xl font-semibold mb-8">Contact Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
              <input class="border border-gray-300 rounded w-full py-2 px-3" type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
              <input class="border border-gray-300 rounded w-full py-2 px-3" type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2" for="message">Message</label>
              <textarea class="border border-gray-300 rounded w-full py-2 px-3" id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button class="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" type="submit">Send Message</button>
          </form>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
          <p class="mb-2"><i class="fas fa-map-marker-alt text-gray-600 mr-2"></i>Lawton Ave, Mckinley West, Taguig, 1634 Metro Manila, Philippines.</p>
          <p class="mb-2"><i class="fas fa-phone-alt text-gray-600 mr-2"></i>(123) 456-7890</p>
          <p class="mb-2"><i class="fas fa-envelope text-gray-600 mr-2"></i>sup.murktechsolutions@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  )
}
