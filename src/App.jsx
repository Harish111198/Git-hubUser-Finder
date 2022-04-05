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

  async componentDidMount() {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret{import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data, loading: false });
  };
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  }

  render() {
    return (
      <div className="App">

        <NavBar title="Github Finder" />

        <Container>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </Container>

      </div>
    )
  }
}


export default App
