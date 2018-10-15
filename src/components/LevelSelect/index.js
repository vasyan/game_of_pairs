import React from 'react'
import { LEVELS } from '../../reducers/board'
import styles from './styles.module.scss'

export default ({ onChange }) => (
  <select className={styles.select} onChange={onChange}>
    {LEVELS.map((level, index) => (
      <option value={level} key={index}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </option>
    ))}
  </select>
)
