import React from 'react'
import styles from "../header/style.module.scss"
import classNames from "classnames"
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom"



const NavBar = ({ title }) => {
  return (
    <nav className={classNames(styles.navbarc)}>
      <h5>

        < GoMarkGithub />
        {title}
      </h5>
      <ul className={styles.myHomec}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

  )
}

NavBar.defaultProps = {
  title: 'Github Ffinder',

}
export default NavBar
