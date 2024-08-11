import './index.css'

const NavBar = (props) => {
  const {score,topScore,isGamePlaying} = props
  return (
    <>
      <div className="navbar-container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        {
          isGamePlaying && (
            <div className="score-container">
              <p className="score-count">Score: {score}</p>
              <p className="top-score-count">Top Score: {topScore}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default NavBar
