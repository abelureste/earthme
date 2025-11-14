import UserCard from "./UserCard"

export default function UserSearchResults({ users, loading, setSelectedUserId, setSearchText }) {

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setSearchText('');
  }

  if(loading) {
    return (
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-10 text-white">
        Loading users...
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-10">
        <div className="space-y-2">
          {users.slice(0,3).map(user =>
            <UserCard
              key={user.id}
              user={user}
              onUserSelect={() => handleUserClick(user.id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}