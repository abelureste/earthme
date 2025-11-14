export default function PinCard({ pin }) {

  const { id, userId, locationName, latitude, longitude, dateAdded } = pin

  return (
    <div className="text-white">

        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 w-160">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-white text-xl">{ locationName }</div>
                <div className="text-gray-400 text-md">{latitude}, {longitude}</div>
              </div>
            </div>
            <div className="inline-flex text-white text-md h-full">
              Added {dateAdded}
            </div>
          </div>
        </div>

    </div>
  )
}