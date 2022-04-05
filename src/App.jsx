import { useState, Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Users from './components/Users'
import NavBar from './layouts/header/NavBar'
import Search from './components/Search'

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {

  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret{import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: res.data, loading: false });
  // };
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  }
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">

        <NavBar title="Github Finder" />

        <Container>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} />
          <Users loading={loading} users={users} />
        </Container>

      </div>
    )
  }
}


export default App
