import { BsGlobe2 } from "react-icons/bs"
import { LuRotate3D } from "react-icons/lu"
import { GoGear } from "react-icons/go"

export default function GlobeControls() {
  return (
    <div className="text-white">

      <div className="fixed top-8 right-8 flex flex-col space-y-3 z-10">
        <button className="bg-gray-900/70 backdrop-blur-sm p-3 rounded-full text-gray-300 hover:bg-gray-800/70 hover:cursor-pointer transition-colors border border-gray-700/50">
          <GoGear size="1.5em"/>
        </button>
        <button className="bg-gray-900/70 backdrop-blur-sm p-3 rounded-full text-gray-300 hover:bg-gray-800/70 hover:cursor-pointer transition-colors border border-gray-700/50">
          <BsGlobe2 size="1.5em"/>
        </button>
        <button className="bg-gray-900/70 backdrop-blur-sm p-3 rounded-full text-gray-300 hover:bg-gray-800/70 hover:cursor-pointer transition-colors border border-gray-700/50">
          <LuRotate3D size="1.5em"/>
        </button>
      </div>

    </div>
  )
}