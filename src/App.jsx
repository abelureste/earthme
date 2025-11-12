import React from 'react'
import Homepage from './components/Homepage'
import UserCard from './components/UserCard'
import GlobeBackground from './components/GlobeBackground'
import GlobeControls from './components/GlobeControls'
import UserSearch from './components/UserSearch'
import UserSearchResults from './components/UserSearchResults'
import MainUserCard from './components/MainUserCard'
import PinHolder from './components/PinHolder'
import SearchFeature from './components/SearchFeature'

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <GlobeBackground />
      
      {/* Your other website content goes here */}
      <SearchFeature />
      <GlobeControls />
      <MainUserCard />
      {/* <PinHolder /> */}
      {/* <Homepage /> */}
    </div>
  )
}