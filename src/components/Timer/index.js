import React from 'react'
import styles from './styles.module.scss'
import { PLAY_TIME } from '../../config'

export default class Timer extends React.Component {
  state = {
    value: 0,
    pause: true
  }

  componentDidUpdate({ play, level }) {
    if (!play && this.props.play) {
      this.start()
    } else if (play && !this.props.play) {
      this.stop()
    }

    if (level !== this.props.level) {
      this.setState({
        value: 0
      })
    }
  }

  start() {
    this.setState(
      {
        pause: false
      },
      this.tick
    )
  }

  stop() {
    this.setState({
      pause: true
    })
  }

  tick = () => {
    if (this.state.pause) {
      return
    }
    const now = Date.now()
    const newValue = now - this.props.startTime

    if (newValue >= PLAY_TIME) {
      this.handleFinish()

      return
    }

    this.setState(
      {
        value: newValue
      },
      () => {
        return requestAnimationFrame(this.tick)
      }
    )
  }

  handleFinish() {
    this.setState({
      value: PLAY_TIME,
      pause: true
    })

    this.props.onFinish()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.value}>
          {Math.floor(PLAY_TIME / 1000 - this.state.value / 1000)}{' '}
          <span className={styles.sec}>sec</span>
        </span>
      </div>
    )
  }
}
