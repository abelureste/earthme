import { useState, useEffect } from 'react'
import UserCard from "./UserCard"
import PinHolder from './PinHolder'

export default function MainUserCard({ mainUser, pins, pinCount }) {
  
  const [ showPins, setShowPins ] = useState(false)

  useEffect(() => {
    setShowPins(false)
  }, [mainUser])

  const togglePins = () => {
    setShowPins(!showPins)
  }

  if(!mainUser) {
    return null
  }

  return (
    <div className="text-white">
      <div className="fixed bottom-8 -translate-x-1/2 z-10">
        {showPins && <PinHolder pins={pins}/>}
        
        <UserCard 
          user={mainUser} 
          pinCount={pinCount} 
          onViewPinsClick={togglePins}
        />
      </div>
    </div>
  )
}