import React, { Component } from 'react'
import UserItem from "../components/UserItem"
import Spinner from './Spinner'


const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  }
  else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          < UserItem key={user.id} user={user} />
        ))}
      </div>

    )

  }
  Users.prototypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

  }





}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users