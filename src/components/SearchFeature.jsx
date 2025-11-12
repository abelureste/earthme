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
          const allUsers = await response.json()
  
          if(allUsers){
            console.log("Successfully fetched users")

            const lowerCaseSearch = searchText.toLowerCase()
            const filteredUsers = allUsers.filter(user => {
              const nameMatch = user.name.toLowerCase().includes(lowerCaseSearch)
              const userNameMatch = user.username.toLowerCase().includes(lowerCaseSearch)
              return nameMatch || userNameMatch
            })

            setUsers(filteredUsers)
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