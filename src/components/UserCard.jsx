import { FaMapPin } from "react-icons/fa"

export default function UserCard() {
  return (
    <div className="text-white">

        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 w-160">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile picture"
                className="h-20 w-20 rounded-full object-cover border border-gray-600"
              />
              <div>
                <div className="font-bold text-white text-xl">Abel Ureste</div>
                <div className="text-gray-400 text-md">@abelureste</div>
                <button className="mt-1.5 bg-gray-700 hover:bg-gray-600 hover:cursor-pointer transition-colors text-white text-xs py-1 px-3 rounded-full">
                  View Pins
                </button>
              </div>
            </div>
            <div className="inline-flex text-white text-md h-full">
              5 <FaMapPin size="1em" className="mt-1"/>
            </div>
          </div>
        </div>

    </div>
  )
}