import './index.css'

const WinOrLoseCard = (props) => {
  const {gameWon, onPlayAgain, score} = props
  const imageUrl = gameWon 
    ? 
      'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 
      'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = gameWon ? 'You Won' : 'You Lose'
  const scoreText = gameWon ? 'Best Score' : 'Score'

  return (
    <div className="score-board-container">
      <div className="result-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button
          type="again-button"
          className="again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="result-img-card">
        <img className="result-img" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
