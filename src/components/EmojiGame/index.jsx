import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojisList: [],
    isGamePlaying: true,
  }

  sendEmojiLists = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const getShuffledEmojisList = shuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {
          getShuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emojiList={eachEmoji}
              key={eachEmoji.id}
              onClickEmoji={this.onClickEmoji}
            />
          ))
        }
      </ul>
    )
  }

  onClickEmoji = (id) => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.endGame(clickedEmojisLength)
    } 
    else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.endGame(emojisList.length)
      }
      this.setState(beforeState => ({
        clickedEmojisList: [...beforeState.clickedEmojisList, id],
      }))
    }
  }

  endGame = (clickedEmojisLength) => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (clickedEmojisLength > topScore) {
      newTopScore = clickedEmojisLength
    }
    this.setState({topScore: newTopScore, isGamePlaying: false})
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGamePlaying: true})
  }

  displayScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const gameWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        gameWon={gameWon}
        onPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  render() {
    const {clickedEmojisList, isGamePlaying, topScore} = this.state
    return (
      <>
        <div className="emoji-main-container">
          <NavBar
            score={clickedEmojisList.length}
            topScore={topScore}
            isGamePlaying={isGamePlaying}
          />
          <div className="game-container">
            {
              isGamePlaying ? this.sendEmojiLists() : this.displayScoreCard()
            }
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
