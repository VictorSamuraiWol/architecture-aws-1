import styles from './PopupDefault.module.css'

function PopupDefault({ specificStyles, text }) {

  return (
    <div
      className={specificStyles}
    > 
      <span>{text}</span>
    </div>
  )
}

export default PopupDefault
