import React, { Fragment } from 'react'
import spinner from '../assets/images/spinner.gif'
const Spinner = () => <Fragment>
  <img src={spinner} alt="Loading..." style={{ width: '50px', margin: 'auto', display: 'block' }}></img>
</Fragment>
export default Spinner