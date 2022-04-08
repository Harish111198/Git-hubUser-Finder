import { useState, Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import About from './pages/About'
import Alert from './layouts/Alert'
import axios from 'axios'
import User from './components/User'
import Users from './components/Users'
import NavBar from './layouts/header/NavBar'
import Search from './components/Search'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
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
  //Get single github user
  getUser = async (username) => {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    this.setState({ user: res.data, loading: false });
  }
  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() =>
      this.setState({ alert: null })
      , 5000);
  }


  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className="App">

          <NavBar title="Github Finder" />
          <Container>
            <Alert alert={this.state.alert} />

            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => {
                <User {...props} getUser={this.getUser} user={user} loading={loading} />
              }} />
            </Switch>





          </Container>

        </div>
      </Router>

    )
  }
}


export default App
