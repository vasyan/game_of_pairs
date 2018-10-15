import React from 'react'
import styles from './styles.module.scss'

export default ({ onStart, onStop, play }) => (
  <div onClick={play ? onStop : onStart} className={styles.button}>
    {play ? 'Stop Game' : 'Start Game'}
  </div>
)
