import React, { Component } from 'react'
import UserItem from "../components/UserItem"

class Users extends Component {
  state = {
    users: [
      {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",

        "html_url": "https://github.com/mojombo",

      },
      {
        "login": "defunkt",
        "id": 2,
        "node_id": "MDQ6VXNlcjI=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt"

      },
      {
        "login": "pjhyett",
        "id": 3,
        "node_id": "MDQ6VXNlcjM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pjhyett",
        "html_url": "https://github.com/pjhyett",
      }
    ]
  }

  render() {
    const styleItem = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '1rem'
    }
    return (
      <div style={styleItem}>
        {this.state.users.map(user => (
          < UserItem key={user.id} user={user} />
        ))}
      </div>

    )
  }
}

export default Users