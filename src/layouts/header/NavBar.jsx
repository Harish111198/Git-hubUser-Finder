import React from 'react'
import styles from "../header/style.module.scss"
import classNames from "classnames"
import { GoMarkGithub } from "react-icons/go";


const NavBar = ({ icon, title }) => {
  return (
    <nav className={classNames(styles.navbarc)}>
      <h5>
        < GoMarkGithub />
        {title}
      </h5>
    </nav>

  )
}

NavBar.defaultProps = {
  title: 'Github Ffinder',

}
export default NavBar
