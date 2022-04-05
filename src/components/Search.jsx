import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Input, Button } from 'reactstrap';
import classNames from 'classnames'
import styles from './styles.module.scss'
class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
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
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>

          <Input className='my-2' type="text"
            name="text" placeholder='Search Users...' value={this.state.text} onChange={this.onChange}></Input>


          <Input type="submit" value="Search" className='my-2 btn btn-dark btn-block'></Input>

        </form>
        {showClear &&
          <Button className={classNames('my-2 ', styles.clearbtn)}
            onClick={clearUsers}>Clear</Button>
        }

      </div>
    )
  }
}

export default Search