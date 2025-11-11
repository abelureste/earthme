export default function PinCard() {
  return (
    <div className="text-white">

        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 w-160">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-white text-xl">New York, NY, USA</div>
                <div className="text-gray-400 text-md">40.7128° N, 74.0060° W</div>
                <button className="mt-1.5 bg-gray-700 hover:bg-gray-600 hover:cursor-pointer transition-colors text-white text-xs py-1 px-3 rounded-full">
                  Go to Pin
                </button>
              </div>
            </div>
            <div className="inline-flex text-white text-md h-full">
              Added 11/21/2025
            </div>
          </div>
        </div>

    </div>
  )
}