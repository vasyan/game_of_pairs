import React from 'react'
import styles from './styles.module.scss'

const SUITS = {
  h: '♥️',
  c: '♣️',
  d: '♦️',
  s: '♠️'
}

export default ({ suit, value, id, opened, onSelect }) => (
  <div className={styles.card}>
    {opened ? (
      <div className={`${styles.wrapper} ${styles.withBorder}`}>
        <div className={styles.valueWrapper}>
          <span className={styles.value}>{value}</span>
          <span className={styles.suit}> {SUITS[suit]}</span>
        </div>
      </div>
    ) : (
      <div
        className={`${styles.wrapper} ${styles.back}`}
        onClick={() => onSelect(id)}
      />
    )}
  </div>
)
