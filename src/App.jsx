// 1. Import useState and useEffect
import React, { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import UserCard from './components/UserCard'
import GlobeBackground from './components/GlobeBackground'
import GlobeControls from './components/GlobeControls'
import SearchFeature from './components/SearchFeature'
import MainUserCard from './components/MainUserCard'
import PinHolder from './components/PinHolder'

export default function App() {
  const [showGlobeFeatures, setShowGlobeFeatures] = useState(false)
  const [isRotating, setIsRotating] = useState(true)
  const [selectedUserId, setSelectedUserId] = useState(1)
  const [mainUser, setMainUser] = useState(null)
  const [pins, setPins] = useState([])
  const [pinCount, setPinCount] = useState(0)

  useEffect(() => {
    if (!selectedUserId) return;

    const fetchMainUserData = async () => {
      try {
        const userResponse = await fetch(`http://localhost:3000/users/${selectedUserId}`)
        const userData = await userResponse.json()
        setMainUser(userData)

        const pinResponse = await fetch(`http://localhost:3000/pins?userId=${selectedUserId}`)
        const pinData = await pinResponse.json()
        setPins(pinData)
        setPinCount(pinData.length)
      } catch (error) {
        console.error("Failed to fetch main user data:", error)
      }
    }

    fetchMainUserData()
  }, [selectedUserId])

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <GlobeBackground 
        showGlobeFeatures={showGlobeFeatures} 
        isRotating={isRotating} 
        pins={pins}
      />
      
      <SearchFeature setSelectedUserId={setSelectedUserId} />
      
      <GlobeControls 
        showGlobeFeatures={showGlobeFeatures}
        setShowGlobeFeatures={setShowGlobeFeatures}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
      />
      
      <MainUserCard 
        mainUser={mainUser}
        pins={pins}
        pinCount={pinCount}
      />
    </div>
  )
}