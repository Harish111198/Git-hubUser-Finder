import React, { Component } from 'react'
import UserItem from "../components/UserItem"

class Users extends Component {


  render() {
    const styleItem = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '1rem'
    }
    return (
      <div style={styleItem}>
        {this.props.users.map(user => (
          < UserItem key={user.id} user={user} />
        ))}
      </div>

    )
  }
}

export default Users