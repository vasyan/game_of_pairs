import React from 'react'
import styles from './styles.module.scss'

export default ({ show, win }) => (
  <div className={`${styles.wrapper} ${show ? styles.show : ''}`}>
    {`You're ${win ? 'WIN' : 'LOSE'}!`}
  </div>
)
