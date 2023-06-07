import { Link } from "react-router-dom";

export const ComingSoon = () => {
  return (
    <>
    <div className="banner min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" alt="comingImg" className="object-cover w-40 h-40 mb-8 rounded-full"/>
    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    <p className="text-lg mb-8 px-4 md:px-0">Murk Technology Solutions is working hard to bring you something awesome. Stay tuned!</p>
    <div className="flex justify-center items-center space-x-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</Link>
        <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</Link>
    </div>
</div>
    </>
  )
}
