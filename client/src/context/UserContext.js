import React from 'react'

const UserContext = () => {
    const [userData, setUserData] = useState({
        user: undefined,
        token: undefined
    })
  return (
    <div>UserContext</div>
  )
}

export default UserContext