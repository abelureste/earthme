import { useState, useEffect } from 'react'
import UserCard from "./UserCard"

export default function MainUserCard() {
  const [ mainUser, setMainUser ] = useState(null)
  const [ pinCount, setPinCount ] = useState(0)

  useEffect(() => {
    const fetchMainUser = async() => {
      try{
        const userResponse = await fetch('http://localhost:3000/users/1')
        const userData = await userResponse.json()
        setMainUser(userData)

        const pinResponse = await fetch('http://localhost:3000/pins?userId=1')
        const pinData = await pinResponse.json()
        setPinCount(pinData.length)
      } catch(error) {
        console.error("Failed to fetch main user:", error)
      }
    }

    fetchMainUser()
  }, [])

  if(!mainUser) {
    return null
  }

  return (
    <div className="text-white">

      <div className="fixed bottom-8 -translate-x-1/2 z-10">
        <UserCard user={mainUser} pinCount={pinCount}/>
      </div>

    </div>
  )
}