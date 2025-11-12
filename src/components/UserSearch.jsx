import { IoSearch } from "react-icons/io5"

export default function UserSearch({ searchText, setSearchText }) {

  return (
    <div className="text-white">
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for a user..."
            className="w-160 bg-gray-900/70 backdrop-blur-sm text-gray-300 placeholder-gray-500 rounded-2xl py-3 px-5 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}