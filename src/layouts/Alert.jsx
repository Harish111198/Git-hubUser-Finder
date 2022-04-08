import React from 'react'
import styles from './styles.module.scss'
import { FiXCircle } from "react-icons/fi"
const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={styles.alertcl} >
        <FiXCircle />
        {alert.msg}

      </div>
    )
  )
}

export default Alert