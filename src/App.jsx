import { useState } from 'react'
import { Container } from 'react-bootstrap'
// import UserItem from './components/UserItem'
import Users from './components/Users'
import NavBar from './layouts/header/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar title="Github Finder" />
      <Container>
        <Users />
      </Container>

    </div>
  )
}

export default App
