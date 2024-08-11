import './index.css'

const EmojiCard = (props) => {
  const {emojiList,onClickEmoji} = props
  const {id,emojiName,emojiUrl} = emojiList

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <>
      <li className="emoji-list-card">
        <button type="button" onClick={clickEmoji} className="emoji-button">
          <img
            src={emojiUrl}
            alt={emojiName}
          />
        </button>
      </li>
    </>
  )
}

export default EmojiCard
