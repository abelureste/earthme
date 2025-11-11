export default function Homepage() {
  return (
    <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl text-center shadow-lg max-w-md w-full">
      <h1 className="text-white text-4xl font-bold mb-2">
        Earthpin.me
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        Track your travels across the world
      </p>
      <button className="bg-slate-600 hover:bg-slate-700 hover:cursor-pointer text-white font-medium py-2 px-8 rounded-lg transition duration-300 ease-in-out">
        Explore Worlds
      </button>
      <p className="text-gray-300 text-lg my-2">
        or
      </p>
      <button className="bg-slate-600 hover:bg-slate-700 hover:cursor-pointer text-white font-medium py-2 px-8 rounded-lg transition duration-300 ease-in-out">
        Log In / Register
      </button>
    </div>
  )
}