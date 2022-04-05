import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Input } from 'reactstrap';
class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  onChange = (e) => {
    this.setState({ text: e.target.value })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>

          <Input className='my-2' type="text"
            name="text" placeholder='Search Users...' value={this.state.text} onChange={this.onChange}></Input>


          <Input type="submit" value="Search" className='my-2 btn btn-dark btn-block'></Input>

        </form>



      </div>
    )
  }
}

export default Search