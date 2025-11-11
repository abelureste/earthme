import { IoIosAddCircleOutline } from "react-icons/io"

export default function AddPin() {
  return (
    <div className="text-white">
        <button className="flex items-center justify-center bg-gray-900/70 hover:bg-gray-800/70 transition-colors hover:cursor-pointer backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50 w-160">
          <IoIosAddCircleOutline size="1.5em"/>
        </button>
    </div>
  )
}