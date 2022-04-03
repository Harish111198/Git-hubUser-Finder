import { useState, Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Users from './components/Users'
import NavBar from './layouts/header/NavBar'

class App extends Component {
  state = {
    users: [],
    loading: false

  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false });
  }


  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <Container>
          <Users loading={this.state.loading} users={this.state.users} />
        </Container>

      </div>
    )
  }
}


export default App
