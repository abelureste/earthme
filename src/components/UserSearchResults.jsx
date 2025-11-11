import UserCard from "./UserCard"

export default function UserSearchResults() {
  return (
    <div className="text-white">

      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-10">
        <div className="space-y-2">
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>

    </div>
  )
}