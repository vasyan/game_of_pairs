import React from 'react'
import styles from './styles.module.scss'

export default ({ value }) => (
  <div className={styles.wrapper}>
    Score: <span className={styles.value}>{value}</span>
  </div>
)
