import React from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export default ({ data, opened, onSelect }) => {
  return (
    <div
      style={{ width: Math.sqrt(data.length) * 65 + 'px' }}
      className={styles.wrapper}
    >
      {data.map(card => (
        <Card
          {...card}
          opened={card.isOpened || opened.includes(card.id)}
          onSelect={onSelect}
          key={card.id}
        />
      ))}
    </div>
  )
}
