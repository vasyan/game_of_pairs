import React from 'react'
import { connect } from 'react-redux'
import LevelSelect from '../components/LevelSelect'
import StartButton from '../components/StartButton'
import Timer from '../components/Timer'
import Board from '../components/Board'
import Score from '../components/Score'
import Result from '../components/Result'
import { createGame, selectCard, startGame, finishGame } from '../actions'
import styles from './styles.module.scss'

class App extends React.Component {
  componentWillMount() {
    this.props.createGame()
  }

  handleChangeLevel = event => {
    this.props.createGame(event.target.value)
  }

  handleSelectCard = id => {
    if (!this.props.play) {
      return
    }

    this.props.selectCard(id)
  }

  handleStartGame = () => {
    this.props.startGame()
  }

  handleStopGame = () => {
    this.props.finishGame()
  }

  handleFinishGame = () => {
    this.props.finishGame()
  }

  render() {
    const { finish, level, board, hand, score, play, startTime } = this.props

    return (
      <div className={styles.appContainer}>
        <header className={styles.header}>
          <LevelSelect level={level} onChange={this.handleChangeLevel} />
          <StartButton
            onStart={this.handleStartGame}
            onStop={this.handleStopGame}
            play={play}
          />
          <Score value={score} />
          <Timer
            play={play}
            startTime={startTime}
            level={level}
            onFinish={this.handleFinishGame}
          />
        </header>
        <section className={styles.boardContainer}>
          <Result win={score === board.length / 2} show={finish} />
          <Board data={board} opened={hand} onSelect={this.handleSelectCard} />
        </section>
      </div>
    )
  }
}

function mapStateToProps({
  hand,
  board: { data, level },
  game: { finish, score, play, startTime }
}) {
  return { finish, board: data, level, hand, score, play, startTime }
}

function mapDispatchToProps() {
  return { createGame, selectCard, startGame, finishGame }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App)
