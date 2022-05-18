import css from './imageChat.module.css'
const ImageChat = ({ name, AmI, timeMessage, color, src }) => {
  if (AmI) {
    return (
      <>
        <div className={css.containerAmI}>
          <div className={`${css.chatContainer}  ${css.chatAmi}`}>
            <p className={css.name} style={{ color: `${color}` }}>
              {name}
            </p>
            <img src={src} className={css.image}></img>
            <h5>{timeMessage}</h5>
            <span className={css.puntoParaTapar}></span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className={`${css.chatContainer}  ${css.chatNotAmi}`}>
      <p className={css.name} style={{ color: `${color}` }}>
        {name}
      </p>
      <img src={src} className={css.image}></img>
      <h5>{timeMessage}</h5>
      <span
        className={`${css.puntoParaTapar} ${css.puntoParaTaparRight} `}
      ></span>
    </div>
  )
}

export default ImageChat
