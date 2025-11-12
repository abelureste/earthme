import React, { useState, useEffect } from 'react'
import UserSearch from './UserSearch'
import UserSearchResults from './UserSearchResults'

export default function SearchFeature() {

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ searchText, setSearchText ] = useState('')
  
    useEffect(() => {
      if (searchText === '') {
        setUsers([])
        setLoading(false)
        return
      }

      setLoading(true)

      const fetchUsers = async() => {
        try {
          const response = await fetch('http://localhost:3000/users')
          const data = await response.json()
  
          if(data){
            console.log("Successfully fetched users")
            setUsers(data)
          }
        } catch (error) {
          console.error("Failed to fetch users:", error)
        } finally {
          setLoading(false)
        }
      }

      const searchTimeout = setTimeout(() => {
        fetchUsers()
      }, 300)

      return () => clearTimeout(searchTimeout)
  
    }, [searchText])

    return(
      <> {/* Use a React Fragment to return multiple components */}
        <UserSearch 
          searchText={searchText} 
          setSearchText={setSearchText} 
        />
      
      {/* Only show results if there is search text */}
        {searchText.length > 0 && (
          <UserSearchResults 
            users={users} 
            loading={loading} 
          />
        )}
      </>
    )
}