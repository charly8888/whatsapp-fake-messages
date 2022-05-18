import css from './chat.module.css'

const Chat = ({ name, message, AmI, timeMessage }) => {
  console.log(AmI)

  if (AmI) {
    return (
      <>
        <div className={css.containerAmI}>
          <div className={`${css.chatContainer}  ${css.chatAmi}`}>
            <p className={css.name}>{name}</p>
            <p>{message}</p>
            <h5>{timeMessage}</h5>
            <span className={css.puntoParaTapar}></span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className={`${css.chatContainer}  ${css.chatNotAmi}`}>
      <p className={css.name}>{name}</p>
      <p>{message}</p>
      <h5>{timeMessage}</h5>
      <span
        className={`${css.puntoParaTapar} ${css.puntoParaTaparRight} `}
      ></span>
    </div>
  )
}

export default Chat
